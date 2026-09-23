// Controlador principal: carregamento de casos e inicialização do aplicativo.

function loadCase(caseKey) {
      currentCaseKey = caseKey;
      const c = CASES[caseKey];
      document.getElementById("caseTag").innerText = c.tag;
      document.getElementById("patientInfoBox").innerHTML = c.history;
      document.getElementById("caseMission").innerText = c.mission;
      resetCurrentForm();
      toggleFetalHighlight(c.idealData.f_7_tipo_obito);
    }

    function toggleFetalHighlight(val) {
      const bV = document.getElementById("blocoVRow");
      if(val === "fetal") bV.classList.add("ring-2", "ring-sky-500", "bg-sky-50/50");
      else bV.classList.remove("ring-2", "ring-sky-500", "bg-sky-50/50");
    }

    function setVia(via) {
      const form = document.getElementById("doForm");
      form.classList.remove("via-branca", "via-amarela", "via-rosa");
      form.classList.add("via-" + via);
      document.getElementById("viaFooterText").innerText = 
        via === 'branca' ? "1ª VIA - SECRETARIA DE SAÚDE (BRANCA)" : 
        via === 'amarela' ? "2ª VIA - FAMÍLIA (AMARELA)" : "3ª VIA - PRONTUÁRIO (ROSA)";
    }

    function updateStampText() {
      if(hasDoctorStamp) {
        const nome = document.getElementById("f_50_nome_medico").value || "DR. CLÍNICO GERAL";
        const crm = document.getElementById("f_51_crm").value || "CRM-PE 00000";
        document.getElementById("stampContent").innerHTML = `${escapeHtml(nome)}<br>${escapeHtml(crm)}`;
      }
    }

    function toggleStamp() {
      hasDoctorStamp = !hasDoctorStamp;
      const vis = document.getElementById("stampVisualArea");
      const btn = document.getElementById("btnStamp");
      if(hasDoctorStamp) {
        vis.classList.remove("hidden");
        updateStampText();
        btn.innerText = "Remover Carimbo";
        btn.className = "no-print bg-rose-600 hover:bg-rose-700 text-white font-bold text-[11px] px-2 py-1 rounded shadow-xs transition";
      } else {
        vis.classList.add("hidden");
        btn.innerText = "Apor Carimbo";
        btn.className = "no-print bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] px-2 py-1 rounded shadow-xs transition";
      }
    }

    function checkRealtimeGarbage() {
      const a = document.getElementById("f_49_causa_a").value;
      const b = document.getElementById("f_49_causa_b").value;
      const c = document.getElementById("f_49_causa_c").value;
      const d = document.getElementById("f_49_causa_d").value;
      const p2 = document.getElementById("f_49_causa_p2").value;
      const all = `${a} ${b} ${c} ${d} ${p2}`;
      
      const alertBox = document.getElementById("garbageAlert");
      const hasG = GARBAGE_TERMS.some(t => t.regex.test(all));
      if(hasG) {
        document.getElementById("garbageText").innerText = "Garbage Code / Sigla Inadequada detectada!";
        alertBox.classList.remove("hidden");
      } else {
        alertBox.classList.add("hidden");
      }
    }

    function escapeHtml(str) {
      if(!str) return '';
      return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }

    function resetCurrentForm() {
      // Manual explicit reset to defeat browser caching/print artifacts
      document.querySelectorAll('.do-input').forEach(el => {
        if(el.tagName === "SELECT" || el.type === "text" || el.type === "number" || el.type === "date") el.value = "";
      });
      document.querySelectorAll('.do-opt input').forEach(el => el.checked = false);
      
      // Select the correct radio for "Não fetal" by default if needed
      document.querySelector('input[name="f_7_tipo_obito"][value="nao_fetal"]').checked = true;

      hasDoctorStamp = false;
      document.getElementById("stampVisualArea").classList.add("hidden");
      const btn = document.getElementById("btnStamp");
      btn.innerText = "Apor Carimbo";
      btn.className = "no-print bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] px-2 py-1 rounded shadow-xs transition";
      document.getElementById("garbageAlert").classList.add("hidden");
    }

    function prefillCorrectCase() {
      resetCurrentForm();
      const d = CASES[currentCaseKey].idealData;
      Object.keys(d).forEach(k => {
        const el = document.getElementById(k);
        if (el) el.value = d[k];
        else {
          const radios = document.querySelectorAll(`input[name="${k}"]`);
          radios.forEach(r => { if(r.value === d[k]) r.checked = true; });
        }
      });
      hasDoctorStamp = true;
      document.getElementById("stampVisualArea").classList.remove("hidden");
      updateStampText();
      document.getElementById("btnStamp").innerText = "Remover Carimbo";
      document.getElementById("btnStamp").className = "no-print bg-rose-600 hover:bg-rose-700 text-white font-bold text-[11px] px-2 py-1 rounded shadow-xs transition";
      toggleFetalHighlight(d.f_7_tipo_obito);
    }

window.addEventListener("DOMContentLoaded", () => {
      loadCase("caso1");
    });
