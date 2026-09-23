// Motor de auditoria e validação pedagógica da Declaração de Óbito.
// Depende de CASES (cases.js) e das funções de UI (ui.js).

function auditForm() {
      const c = CASES[currentCaseKey];
      let score = 100;
      let items = [];

      // 1. CARIMBO E ASSINATURA
      const medNome = document.getElementById("f_50_nome_medico").value.trim();
      const medCrm = document.getElementById("f_51_crm").value.trim();
      if (hasDoctorStamp && medNome && medCrm) {
        items.push({ title: "1. Assinatura e Carimbo", status: "ok", msg: "Carimbo com CRM perfeitamente apenso." });
      } else {
        score -= 20;
        items.push({ title: "1. Falha Ética de Assinatura (55)", status: "error", msg: "Obrigatório apor carimbo legível com CRM." });
      }

      // 2. IDENTIFICAÇÃO BÁSICA E NOME
      const nome = document.getElementById("f_11_nome").value.trim().toUpperCase();
      let ideErrors = [];
      if (c.validation.nomeExato && nome !== c.validation.nomeExato) ideErrors.push(`Nome diverge (Esperado: ${c.validation.nomeExato})`);
      else if (c.validation.nomeKeywords) {
         const hasKeys = c.validation.nomeKeywords.every(k => nome.includes(k));
         if (!hasKeys) ideErrors.push("Nome preenchido diverge do prontuário do paciente");
      }
      if (ideErrors.length > 0) {
        score -= 10;
        items.push({ title: "2. Inconsistência de Identificação", status: "error", msg: ideErrors.join(", ") });
      }

      // 3. BLOCO V (FETAL / MENOR 1 ANO)
      const f33 = document.getElementById("f_33_idade_mae").value;
      const f37 = document.getElementById("f_37_gestacao").value;
      const f41 = document.getElementById("f_41_peso").value;
      const isBlocoVFilled = f33 || f37 || f41;

      if (c.validation.fetal) {
         let fetalErrs = [];
         if (f33 !== c.validation.idadeMae) fetalErrs.push("Idade da mãe omitida ou incorreta");
         if (f37 !== c.validation.gestacaoEsperada) fetalErrs.push("Semanas de gestação divirgem");
         if (f41 !== c.validation.pesoEsperado) fetalErrs.push("Peso fetal diverge");
         
         if (fetalErrs.length > 0) {
           score -= 20;
           items.push({ title: "3. Preenchimento do Bloco V", status: "error", msg: "Falhas encontradas: " + fetalErrs.join(", ") });
         } else {
           items.push({ title: "3. Preenchimento do Bloco V", status: "ok", msg: "Dados materno-fetais corretamente transpostos do prontuário." });
         }
      } else {
         if (isBlocoVFilled) {
           score -= 15;
           items.push({ title: "3. Preenchimento Indevido (Bloco V)", status: "error", msg: "Para adultos/óbito não fetal, o Bloco V deve ficar estritamente em branco." });
         } else {
           items.push({ title: "3. Preenchimento Fetal (Bloco V)", status: "ok", msg: "Mantido em branco de forma correta (óbito não fetal)." });
         }
      }

      // 4. ÓBITO MULHER E ASSISTÊNCIA E CONFIRMAÇÃO
      const mGrav = document.getElementById("f_43_morte_gravidez").value;
      const mPuer = document.getElementById("f_44_morte_puerperio").value;
      if (!c.validation.fetal && c.validation.sexoEsperado === "F" && c.validation.idadeEsperada >= 10 && c.validation.idadeEsperada <= 49) {
         if (!mGrav || !mPuer) {
            score -= 15;
            items.push({ title: "4. Mortalidade Materna (Campos 43 e 44)", status: "error", msg: "Campos obrigatórios (em branco) para qualquer mulher em idade fértil." });
         } else if (mGrav !== c.validation.morteGravidez || mPuer !== c.validation.mortePuerperio) {
            score -= 10;
            items.push({ title: "4. Classificação Materna Incorreta", status: "error", msg: "Relação com gravidez/puerpério assinalada de forma contrária ao prontuário." });
         } else {
            items.push({ title: "4. Investigação Materna", status: "ok", msg: "Campos 43 e 44 preenchidos corretamente (óbito de mulher)." });
         }
      }

      const assist = document.querySelector('input[name="f_45_assistencia"]:checked')?.value;
      const exam = document.querySelector('input[name="f_46_exame"]:checked')?.value;
      const cirur = document.querySelector('input[name="f_47_cirurgia"]:checked')?.value;
      const necrop = document.querySelector('input[name="f_48_necropsia"]:checked')?.value;
      
      if (!assist || !exam || !cirur || !necrop) {
         score -= 15;
         items.push({ title: "Assistência e Confirmação Diagnóstica (45 a 48)", status: "error", msg: "Faltam campos de confirmação ou assistência obrigatórios a serem assinalados." });
      }

      // 5. CADEIA CAUSAL (49)
      const cA = document.getElementById("f_49_causa_a").value.trim().toUpperCase();
      const cB = document.getElementById("f_49_causa_b").value.trim().toUpperCase();
      const cD = document.getElementById("f_49_causa_d").value.trim().toUpperCase();
      let cErrs = [];
      const cAll = `${cA} ${cB} ${cD}`;
      const hasGarbage = GARBAGE_TERMS.some(g => g.regex.test(cAll));
      
      if (hasGarbage) cErrs.push("Garbage Code ou sigla detectada");
      if (!cA) cErrs.push("Causa Imediata na linha A em branco");
      else if (!c.validation.causaA_keywords.some(k => cA.includes(k))) cErrs.push("Causa imediata diverge do evento terminal");
      
      if (!cD && !c.validation.fetal) cErrs.push("Causa Raiz/Básica na linha D ausente");
      else if (cD && !c.validation.causaD_keywords.some(k => cD.includes(k))) cErrs.push("Condição básica não reflete a etiologia correta do prontuário");

      if (cErrs.length > 0) {
         score -= 25;
         items.push({ title: "5. Cadeia Causal Inconsistente (Campo 49)", status: "error", msg: cErrs.join("; ") });
      } else {
         items.push({ title: "5. Fluxo Causal", status: "ok", msg: "Diagnósticos ordenados de forma fisiopatológica e correta." });
      }

      // 6. CAUSA EXTERNA / IML
      const atendeu = document.getElementById("f_52_atendeu").value;
      if (c.validation.isTrauma) {
         if (atendeu !== "3") {
            score -= 30; // Erro Etico Severo
            items.push({ title: "6. Responsabilidade Ético-Legal (Causa Externa)", status: "error", msg: "INFRAÇÃO: Óbito de causa externa (ex: queda/trauma). O hospital não pode atestar! Obrigatório encaminhar ao IML (campo 52=3)." });
         } else {
            items.push({ title: "6. Responsabilidade Ético-Legal", status: "ok", msg: "Perfeito. Corpo adequadamente derivado ao IML." });
         }
      } else {
         if (atendeu === "3") {
            score -= 15;
            items.push({ title: "6. Responsabilidade Médica", status: "error", msg: "Óbito natural com assistência não deve ir ao IML. O médico assistente/platonista (1 ou 2) deve atestar." });
         }
      }

      score = Math.max(0, score);
      renderAuditResult(score, items);
    }

    function renderAuditResult(score, items) {
      const modal = document.getElementById("auditModal");
      document.getElementById("auditScoreText").innerText = `${score} / 100`;
      
      const badge = document.getElementById("auditBadgeStatus");
      const sumText = document.getElementById("auditSummaryText");
      const icon = document.getElementById("auditIconScore");
      
      if (score >= 85) {
        badge.className = "px-3 py-1 rounded-full font-black text-xs bg-emerald-100 text-emerald-900 border border-emerald-300";
        badge.innerText = "Aprovado / Padrão Ouro"; sumText.innerText = "Excelência Médico-Estatística"; icon.className = "w-9 h-9 rounded-lg flex items-center justify-center font-black text-white bg-emerald-600"; icon.innerText = "✓";
      } else if (score >= 60) {
        badge.className = "px-3 py-1 rounded-full font-black text-xs bg-amber-100 text-amber-900 border border-amber-300";
        badge.innerText = "Atenção a Inconformidades"; sumText.innerText = "Contém falhas contornáveis mas que afetam estatísticas"; icon.className = "w-9 h-9 rounded-lg flex items-center justify-center font-black text-white bg-amber-600"; icon.innerText = "!";
      } else {
        badge.className = "px-3 py-1 rounded-full font-black text-xs bg-rose-100 text-rose-900 border border-rose-300";
        badge.innerText = "Inadequado / Risco Ético"; sumText.innerText = "Severas infrações normativas e omissões críticas detectadas"; icon.className = "w-9 h-9 rounded-lg flex items-center justify-center font-black text-white bg-rose-600"; icon.innerText = "✕";
      }

      const container = document.getElementById("auditItemsContainer");
      container.innerHTML = "";
      items.forEach(it => {
        let borderClass = it.status === "ok" ? "border-emerald-300 bg-emerald-50 text-emerald-950" : "border-rose-300 bg-rose-50 text-rose-950";
        let iconBadge = it.status === "ok" ? `<span class="text-emerald-700 font-black">✓</span>` : `<span class="text-rose-700 font-black">✕</span>`;
        container.innerHTML += `
          <div class="p-2.5 rounded-lg border ${borderClass} flex items-start gap-2 text-xs">
            <div class="mt-0.5 shrink-0">${iconBadge}</div>
            <div class="flex-1">
              <div class="font-extrabold">${escapeHtml(it.title)}</div>
              <div class="mt-0.5 leading-relaxed font-medium">${escapeHtml(it.msg)}</div>
            </div>
          </div>
        `;
      });

      document.getElementById("auditCaseOfficialSolution").innerText = CASES[currentCaseKey].officialFeedback;
      modal.classList.remove("hidden");
    }
