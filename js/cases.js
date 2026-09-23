// BANCO DE DADOS DE CASOS CLÍNICOS ADAPTADO AOS 62 ITENS DA VERSÃO OFICIAL 03/08-01
    const CASES = {
      caso1: {
        id: "caso1",
        tag: "CASO #1 - MULHER EM IDADE FÉRTIL / NÃO OBSTÉTRICO",
        title: "Mulher com 34 anos, pneumonia bacteriana e choque séptico",
        history: `
          <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-3 text-xs sm:text-sm leading-relaxed text-slate-800">
            <div>
              <h4 class="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-1">1. Identificação e Residência</h4>
              <p><strong>Paciente:</strong> Aline Maria da Silva, 34 anos (nasc. 06/03/1992), sexo Feminino, raça Branca. Estado civil: Solteira. Escolaridade: de 8 a 11 anos. Ocupação: Auxiliar Administrativa (Cód: 4110).</p>
              <p><strong>Filiação:</strong> José Roberto da Silva e Maria das Graças Silva. Naturalidade: Bezerros / PE. Documento: RG 8.456.123.</p>
              <p><strong>Residência:</strong> Rua das Acácias, 217, Bairro Indianópolis, Caruaru - PE. CEP 55024-999.</p>
            </div>
            <div>
              <h4 class="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-1">2. Ocorrência</h4>
              <p><strong>Local:</strong> Óbito hospitalar em 18/09/2026 às 14:30. Unidade Hospitalar Fictícia do Agreste (Cód: 1234567), Avenida do Agreste, 180, Bairro Universitário, Caruaru - PE. CEP 55030-999.</p>
            </div>
            <div>
              <h4 class="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-1">3. Quadro Clínico e Evolução</h4>
              <p>A paciente negou gravidez, parto ou aborto no último ano, e não estava no puerpério. Internada tratando Pneumonia Bacteriana (CID J15.9) detectada há 6 dias. Evoluiu com Sepse (CID A41.9) há 3 dias e Choque Séptico refratário (CID R57.2) nas últimas 24 horas, indo a óbito. Recebeu assistência médica, realizou exames complementares. Sem cirurgia e sem necrópsia.</p>
              <p class="mt-1"><strong>Médica Atestante:</strong> Dra. Larissa Monteiro, CRM-PE 99990 (Assistente). Contato: (81) 99999-0001.</p>
            </div>
          </div>
        `,
        mission: "Preencha os campos 43 e 44 mesmo sendo um caso não obstétrico: assinale 'Não' para gravidez/parto/aborto e para puerpério. Complete também assistência, necrópsia, médico/carimbo e a cadeia causal do item 49.",
        validation: {
          nomeExato: "ALINE MARIA DA SILVA",
          fetal: false,
          sexoEsperado: "F",
          idadeEsperada: 34,
          morteGravidez: "2",
          mortePuerperio: "3",
          causaA_keywords: ["CHOQUE", "SEPTICO", "SÉPTICO"],
          causaD_keywords: ["PNEUMONIA"],
          isTrauma: false
        },
        idealData: {
          f_1_cartorio: "", f_1_codigo: "", f_2_registro: "", f_3_data: "", f_4_municipio: "", f_5_uf: "", f_6_cemiterio: "",
          f_7_tipo_obito: "nao_fetal", f_8_data: "2026-09-18", f_8_hora: "14:30", f_9_ric: "8.456.123",
          f_10_naturalidade: "BEZERROS / PE", f_11_nome: "ALINE MARIA DA SILVA", f_12_nome_pai: "JOSE ROBERTO DA SILVA",
          f_13_nome_mae: "MARIA DAS GRACAS SILVA", f_14_data_nasc: "1992-03-06", f_15_idade_anos: "34", f_15_idade_menor: "",
          f_16_sexo: "F", f_17_raca: "1", f_18_estado_civil: "1", f_19_escolaridade: "4", f_20_ocupacao: "AUXILIAR ADMINISTRATIVA",
          f_20_codigo: "4110", f_21_logradouro: "RUA DAS ACACIAS", f_21_numero: "217", f_21_complemento: "",
          f_22_cep: "55024-999", f_23_bairro: "INDIANOPOLIS", f_24_municipio: "CARUARU", f_25_uf: "PE",
          f_26_local: "1", f_27_estabelecimento: "UNIDADE HOSPITALAR FICTICIA DO AGRESTE", f_27_codigo: "1234567",
          f_28_endereco: "AVENIDA DO AGRESTE, 180", f_29_cep: "55030-999", f_30_bairro: "UNIVERSITARIO",
          f_31_municipio: "CARUARU", f_32_uf: "PE", f_33_idade_mae: "", f_34_escolaridade_mae: "", f_35_ocupacao_mae: "",
          f_36_vivos: "", f_36_mortos: "", f_37_gestacao: "", f_38_gravidez: "", f_39_parto: "", f_40_morte_parto: "",
          f_41_peso: "", f_42_dnv: "", f_43_morte_gravidez: "2", f_44_morte_puerperio: "3", f_45_assistencia: "1",
          f_46_exame: "1", f_47_cirurgia: "2", f_48_necropsia: "2", f_49_causa_a: "CHOQUE SEPTICO", f_49_tempo_a: "24 HORAS",
          f_49_cid_a: "R57.2", f_49_causa_b: "SEPSE", f_49_tempo_b: "3 DIAS", f_49_cid_b: "A41.9",
          f_49_causa_c: "PNEUMONIA BACTERIANA", f_49_tempo_c: "6 DIAS", f_49_cid_c: "J15.9", f_49_causa_d: "", f_49_tempo_d: "",
          f_49_cid_d: "", f_49_causa_p2: "", f_49_tempo_p2: "", f_49_cid_p2: "", f_50_nome_medico: "DRA. LARISSA MONTEIRO",
          f_51_crm: "CRM-PE 99990", f_52_atendeu: "1", f_53_contato: "(81) 99999-0001", f_54_data_atestado: "2026-09-18",
          f_56_tipo: "", f_57_trabalho: "", f_58_fonte: "", f_59_descricao: "", f_60_logradouro: "", f_60_codigo: "",
          f_61_declarante: "", f_62_testemunha_a: "", f_62_testemunha_b: ""
        },
        officialFeedback: "Mesmo em um óbito não obstétrico de mulher entre 10 e 49 anos, os campos 43 e 44 devem ser preenchidos: neste caso, ambos recebem 'Não'. Na cadeia causal (49): a) choque séptico (24h), b) sepse (3 dias) e c) pneumonia bacteriana (6 dias). Não use 'Parada Cardíaca' ou 'Falência de Órgãos'."
      },

      caso2: {
        id: "caso2",
        tag: "CASO #2 - DOENÇA CRÔNICA / EVITAR GARBAGE CODE",
        title: "Homem com 68 anos, hipertenso, evolui com IAM e Choque Cardiogênico",
        history: `
          <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-3 text-xs sm:text-sm leading-relaxed text-slate-800">
            <div>
              <h4 class="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-1">1. Identificação e Residência</h4>
              <p><strong>Paciente:</strong> Antônio Ferreira dos Santos, 68 anos (nasc. 10/02/1958), sexo Masculino, raça Parda. Estado civil: Viúvo. Escolaridade: de 1 a 3 anos. Ocupação: Pedreiro Aposentado (Cód: 7152).</p>
              <p><strong>Filiação:</strong> Manoel dos Santos e Maria Ferreira dos Santos. Naturalidade: Bezerros / PE. Documento: RG 4.123.987.</p>
              <p><strong>Residência:</strong> Rua do Cedro, 890, Bairro São Francisco, Bezerros - PE. CEP 55660-999.</p>
            </div>
            <div>
              <h4 class="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-1">2. Ocorrência</h4>
              <p><strong>Local:</strong> Óbito hospitalar em 19/09/2026 às 08:15. Hospital Fictício do Agreste (Cód: 7654321), Rua do Comércio, 45, Bairro Centro, Bezerros - PE. CEP 55660-998.</p>
            </div>
            <div>
              <h4 class="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-1">3. Quadro Clínico e Evolução</h4>
              <p>Paciente portador de Hipertensão Arterial e Diabetes Mellitus (CID I10 / E11) há 18 anos. Possui Doença Cardiovascular Aterosclerótica (CID I25.1) identificada há 15 anos. Sofreu um Infarto Agudo do Miocárdio (CID I21.0) há 4 dias e evoluiu com Choque Cardiogênico (CID R57.0) refratário nas últimas 12 horas, falecendo. Recebeu assistência médica regular e realizou exames complementares. Sem cirurgia e sem necrópsia.</p>
              <p class="mt-1"><strong>Médico Atestante:</strong> Dr. Pedro Henrique Lima, CRM-PE 99991 (Assistente). Contato: (81) 99999-0002.</p>
            </div>
          </div>
        `,
        mission: "Atestar o óbito hospitalar evitando Garbage Codes. Causa imediata: Choque Cardiogênico. Causa antecedente: Infarto Agudo do Miocárdio. Causa básica: Doença Cardiovascular Aterosclerótica. Comorbidades em Parte II.",
        validation: {
          nomeExato: "ANTONIO FERREIRA DOS SANTOS",
          fetal: false,
          sexoEsperado: "M",
          idadeEsperada: 68,
          causaA_keywords: ["CHOQUE", "CARDIOGENICO", "CARDIOGÊNICO"],
          causaD_keywords: ["DOENCA", "DOENÇA", "ATEROSCLEROTICA", "CARDIOVASCULAR", "ATEROSCLEROSE"],
          isTrauma: false
        },
        idealData: {
          f_1_cartorio: "", f_1_codigo: "", f_2_registro: "", f_3_data: "", f_4_municipio: "", f_5_uf: "", f_6_cemiterio: "",
          f_7_tipo_obito: "nao_fetal", f_8_data: "2026-09-19", f_8_hora: "08:15", f_9_ric: "4.123.987",
          f_10_naturalidade: "BEZERROS / PE", f_11_nome: "ANTONIO FERREIRA DOS SANTOS", f_12_nome_pai: "MANOEL DOS SANTOS",
          f_13_nome_mae: "MARIA FERREIRA DOS SANTOS", f_14_data_nasc: "1958-02-10", f_15_idade_anos: "68", f_15_idade_menor: "",
          f_16_sexo: "M", f_17_raca: "4", f_18_estado_civil: "3", f_19_escolaridade: "2", f_20_ocupacao: "PEDREIRO APOSENTADO",
          f_20_codigo: "7152", f_21_logradouro: "RUA DO CEDRO", f_21_numero: "890", f_21_complemento: "",
          f_22_cep: "55660-999", f_23_bairro: "SAO FRANCISCO", f_24_municipio: "BEZERROS", f_25_uf: "PE",
          f_26_local: "1", f_27_estabelecimento: "HOSPITAL FICTICIO DO AGRESTE", f_27_codigo: "7654321",
          f_28_endereco: "RUA DO COMERCIO, 45", f_29_cep: "55660-998", f_30_bairro: "CENTRO",
          f_31_municipio: "BEZERROS", f_32_uf: "PE", f_33_idade_mae: "", f_34_escolaridade_mae: "", f_35_ocupacao_mae: "",
          f_36_vivos: "", f_36_mortos: "", f_37_gestacao: "", f_38_gravidez: "", f_39_parto: "", f_40_morte_parto: "",
          f_41_peso: "", f_42_dnv: "", f_43_morte_gravidez: "", f_44_morte_puerperio: "", f_45_assistencia: "1",
          f_46_exame: "1", f_47_cirurgia: "2", f_48_necropsia: "2", f_49_causa_a: "CHOQUE CARDIOGENICO", f_49_tempo_a: "12 HORAS",
          f_49_cid_a: "R57.0", f_49_causa_b: "INFARTO AGUDO DO MIOCARDIO", f_49_tempo_b: "4 DIAS", f_49_cid_b: "I21.0",
          f_49_causa_c: "", f_49_tempo_c: "", f_49_cid_c: "", f_49_causa_d: "DOENCA CARDIOVASCULAR ATEROSCLEROTICA", f_49_tempo_d: "15 ANOS",
          f_49_cid_d: "I25.1", f_49_causa_p2: "HIPERTENSAO E DIABETES", f_49_tempo_p2: "18 ANOS", f_49_cid_p2: "I10", f_50_nome_medico: "DR. PEDRO HENRIQUE LIMA",
          f_51_crm: "CRM-PE 99991", f_52_atendeu: "1", f_53_contato: "(81) 99999-0002", f_54_data_atestado: "2026-09-19",
          f_56_tipo: "", f_57_trabalho: "", f_58_fonte: "", f_59_descricao: "", f_60_logradouro: "", f_60_codigo: "",
          f_61_declarante: "", f_62_testemunha_a: "", f_62_testemunha_b: ""
        },
        officialFeedback: "A parada cardíaca é apenas a cessação terminal biológica, sendo vedada como causa da morte. A cadeia causal correta é Choque Cardiogênico (12h) -> IAM (4 dias) -> Doença Aterosclerótica (15 anos). Hipertensão e Diabetes entram na Parte II."
      },

      caso3: {
        id: "caso3",
        tag: "CASO #3 - CAUSA EXTERNA / CONDUTA COM IML",
        title: "Idoso com 75 anos, queda no banheiro, TCE e óbito no hospital",
        history: `
          <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-3 text-xs sm:text-sm leading-relaxed text-slate-800">
            <div>
              <h4 class="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-1">1. Identificação e Residência</h4>
              <p><strong>Paciente:</strong> Geraldo Ramos de Oliveira, 75 anos (nasc. 14/05/1951), sexo Masculino, raça Branca. Estado civil: Casado. Escolaridade: 12 e mais. Ocupação: Bancário Aposentado (Cód: 4132).</p>
              <p><strong>Filiação:</strong> José Ramos de Oliveira e Benedita Ramos. Naturalidade: Caruaru / PE. Documento: RG 2.111.444.</p>
              <p><strong>Residência:</strong> Rua do Rosário, 1020, Bairro Vassoural, Caruaru - PE. CEP 55028-999.</p>
            </div>
            <div>
              <h4 class="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-1">2. Ocorrência</h4>
              <p><strong>Local do Óbito:</strong> Óbito hospitalar em 20/09/2026 às 06:40. Hospital Fictício do Agreste (Cód: 7654321), Avenida do Agreste, 180, Bairro Universitário, Caruaru - PE. CEP 55030-999.</p>
            </div>
            <div>
              <h4 class="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-1">3. Quadro Clínico e Evento</h4>
              <p>Há 2 dias, escorregou no banheiro de sua residência (Rua do Rosário, 1020), sofrendo Queda da própria altura (CID W01.0). Socorrido, apresentou Traumatismo Cranioencefálico (CID S02.9) e Hematoma Subdural Agudo Traumático (CID S06.5) detectados há 2 dias. Realizada cirurgia, mas evoluiu com Edema Cerebral Grave (CID G93.6) nas últimas 24 horas, falecendo. Como é uma morte não natural (causa externa), o corpo será encaminhado ao IML para necrópsia.</p>
              <p class="mt-1"><strong>Médica Atestante:</strong> Dra. Joana Tavares, CRM-PE 99992 (Médica Legista - IML). Contato: (81) 99999-0003.</p>
            </div>
          </div>
        `,
        mission: "ALERTA LEGAL: Morte decorrente de trauma acidental ou violento (inclusive queda doméstica) é classificada como CAUSA EXTERNA. A DO é de competência EXCLUSIVA do IML (médico-legista, campo 52=3). O médico hospitalar não deve atestar! Preencha a cadeia causal e o Bloco VIII integralmente.",
        validation: {
          nomeExato: "GERALDO RAMOS DE OLIVEIRA",
          fetal: false,
          sexoEsperado: "M",
          idadeEsperada: 75,
          causaA_keywords: ["EDEMA", "CEREBRAL", "INTRACRANIANO"],
          causaD_keywords: ["QUEDA", "TRAUMA", "ALTURA"],
          isTrauma: true
        },
        idealData: {
          f_1_cartorio: "", f_1_codigo: "", f_2_registro: "", f_3_data: "", f_4_municipio: "", f_5_uf: "", f_6_cemiterio: "",
          f_7_tipo_obito: "nao_fetal", f_8_data: "2026-09-20", f_8_hora: "06:40", f_9_ric: "2.111.444",
          f_10_naturalidade: "CARUARU / PE", f_11_nome: "GERALDO RAMOS DE OLIVEIRA", f_12_nome_pai: "JOSE RAMOS DE OLIVEIRA",
          f_13_nome_mae: "BENEDITA RAMOS", f_14_data_nasc: "1951-05-14", f_15_idade_anos: "75", f_15_idade_menor: "",
          f_16_sexo: "M", f_17_raca: "1", f_18_estado_civil: "2", f_19_escolaridade: "5", f_20_ocupacao: "BANCARIO APOSENTADO",
          f_20_codigo: "4132", f_21_logradouro: "RUA DO ROSARIO", f_21_numero: "1020", f_21_complemento: "",
          f_22_cep: "55028-999", f_23_bairro: "VASSOURAL", f_24_municipio: "CARUARU", f_25_uf: "PE",
          f_26_local: "1", f_27_estabelecimento: "HOSPITAL FICTICIO DO AGRESTE", f_27_codigo: "7654321",
          f_28_endereco: "AVENIDA DO AGRESTE, 180", f_29_cep: "55030-999", f_30_bairro: "UNIVERSITARIO",
          f_31_municipio: "CARUARU", f_32_uf: "PE", f_33_idade_mae: "", f_34_escolaridade_mae: "", f_35_ocupacao_mae: "",
          f_36_vivos: "", f_36_mortos: "", f_37_gestacao: "", f_38_gravidez: "", f_39_parto: "", f_40_morte_parto: "",
          f_41_peso: "", f_42_dnv: "", f_43_morte_gravidez: "", f_44_morte_puerperio: "", f_45_assistencia: "1",
          f_46_exame: "1", f_47_cirurgia: "1", f_48_necropsia: "1", f_49_causa_a: "EDEMA CEREBRAL GRAVE", f_49_tempo_a: "1 DIA",
          f_49_cid_a: "G93.6", f_49_causa_b: "HEMATOMA SUBDURAL AGUDO TRAUMATICO", f_49_tempo_b: "2 DIAS", f_49_cid_b: "S06.5",
          f_49_causa_c: "TRAUMATISMO CRANIOENCEFALICO", f_49_tempo_c: "2 DIAS", f_49_cid_c: "S02.9", f_49_causa_d: "QUEDA DA PROPRIA ALTURA NO BANHEIRO", f_49_tempo_d: "2 DIAS",
          f_49_cid_d: "W01.0", f_49_causa_p2: "", f_49_tempo_p2: "", f_49_cid_p2: "", f_50_nome_medico: "DRA. JOANA TAVARES (MEDICA LEGISTA)",
          f_51_crm: "CRM-PE 99992", f_52_atendeu: "3", f_53_contato: "(81) 99999-0003", f_54_data_atestado: "2026-09-20",
          f_56_tipo: "1", f_57_trabalho: "2", f_58_fonte: "2", f_59_descricao: "QUEDA DA PROPRIA ALTURA NO BANHEIRO COM TRAUMATISMO CRANIOENCEFALICO", f_60_logradouro: "RUA DO ROSARIO, 1020", f_60_codigo: "",
          f_61_declarante: "", f_62_testemunha_a: "", f_62_testemunha_b: ""
        },
        officialFeedback: "Nos óbitos de causa não natural (acidentes ou violências), a declaração compete exclusivamente ao IML (campo 52 = 3 - IML). O Bloco VIII (Causas Externas) deve ser obrigatoriamente preenchido descrevendo o trauma e a fonte da informação."
      },

      caso4: {
        id: "caso4",
        tag: "CASO #4 - SAÚDE MATERNO-INFANTIL / ÓBITO FETAL",
        title: "Natimorto com 32 semanas gestacionais (1.800g), DPP",
        history: `
          <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-3 text-xs sm:text-sm leading-relaxed text-slate-800">
            <div>
              <h4 class="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-1">1. Identificação do Natimorto e Genitores</h4>
              <p><strong>Identificação Fetal:</strong> Óbito Tipo Fetal. Nome: NATIMORTO. Sexo: Masculino. Peso: 1.800 gramas. DNV: Não preencher. Data Nascimento: Mesma do óbito.</p>
              <p><strong>Mãe:</strong> Beatriz Silveira Lima, 29 anos. Escolaridade: 12 e mais. Ocupação: Professora (Cód: 2312). Teve 1 filho vivo e 0 mortos. Natural de Garanhuns / PE. Raça: Branca.</p>
              <p><strong>Pai:</strong> Rodrigo Lima.</p>
              <p><strong>Residência da Mãe:</strong> Rua das Palmeiras, 450, Bairro Heliópolis, Garanhuns - PE. CEP 55296-999.</p>
            </div>
            <div>
              <h4 class="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-1">2. Ocorrência e Informações Gestacionais</h4>
              <p><strong>Local:</strong> Óbito na Maternidade Fictícia do Agreste (Cód: 9988776), Rua da Saúde, 100, Bairro Boa Vista, Garanhuns - PE. CEP 55295-999. Óbito ocorrido em 17/09/2026 às 11:20.</p>
              <p><strong>Parto:</strong> Gestação de 32 a 36 semanas. Gravidez única. Parto vaginal. Morte ocorreu ANTES do parto.</p>
            </div>
            <div>
              <h4 class="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-1">3. Quadro Clínico</h4>
              <p>Óbito intrauterino evidenciado por Anoxia Intrauterina Grave (CID P20.9) decorrente de Descolamento Prematuro de Placenta - DPP (CID P02.1), ambos constatados há horas. Houve assistência, exames complementares, sem cirurgia, sem necrópsia.</p>
              <p class="mt-1"><strong>Médica Atestante:</strong> Dra. Helena Moura, CRM-PE 99993 (Assistente). Contato: (87) 99999-0004.</p>
            </div>
          </div>
        `,
        mission: "Preencher a DO para Óbito Fetal. Campo 7: 1 - Fetal. Campo 11: OBRIGATORIAMENTE 'NATIMORTO'. O Bloco V (Fetal ou menor que 1 ano) deve ser preenchido na totalidade com os dados da mãe.",
        validation: {
          nomeExato: "NATIMORTO",
          fetal: true,
          idadeMae: "29",
          gestacaoEsperada: "4",
          pesoEsperado: "1800",
          sexoEsperado: "M",
          idadeEsperada: 0,
          causaA_keywords: ["ANOXIA", "ASFIXIA", "HIPOXIA"],
          causaD_keywords: ["DESCOLAMENTO", "PLACENTA", "DPP"],
          isTrauma: false
        },
        idealData: {
          f_1_cartorio: "", f_1_codigo: "", f_2_registro: "", f_3_data: "", f_4_municipio: "", f_5_uf: "", f_6_cemiterio: "",
          f_7_tipo_obito: "fetal", f_8_data: "2026-09-17", f_8_hora: "11:20", f_9_ric: "",
          f_10_naturalidade: "GARANHUNS / PE", f_11_nome: "NATIMORTO", f_12_nome_pai: "RODRIGO LIMA",
          f_13_nome_mae: "BEATRIZ SILVEIRA LIMA", f_14_data_nasc: "2026-09-17", f_15_idade_anos: "", f_15_idade_menor: "",
          f_16_sexo: "M", f_17_raca: "1", f_18_estado_civil: "", f_19_escolaridade: "", f_20_ocupacao: "",
          f_20_codigo: "", f_21_logradouro: "RUA DAS PALMEIRAS", f_21_numero: "450", f_21_complemento: "",
          f_22_cep: "55296-999", f_23_bairro: "HELIOPOLIS", f_24_municipio: "GARANHUNS", f_25_uf: "PE",
          f_26_local: "1", f_27_estabelecimento: "MATERNIDADE FICTICIA DO AGRESTE", f_27_codigo: "9988776",
          f_28_endereco: "RUA DA SAUDE, 100", f_29_cep: "55295-999", f_30_bairro: "BOA VISTA",
          f_31_municipio: "GARANHUNS", f_32_uf: "PE", f_33_idade_mae: "29", f_34_escolaridade_mae: "5", f_35_ocupacao_mae: "PROFESSORA",
          f_36_vivos: "1", f_36_mortos: "0", f_37_gestacao: "4", f_38_gravidez: "1", f_39_parto: "1", f_40_morte_parto: "1",
          f_41_peso: "1800", f_42_dnv: "", f_43_morte_gravidez: "", f_44_morte_puerperio: "", f_45_assistencia: "1",
          f_46_exame: "1", f_47_cirurgia: "2", f_48_necropsia: "2", f_49_causa_a: "ANOXIA INTRAUTERINA GRAVE", f_49_tempo_a: "HORAS",
          f_49_cid_a: "P20.9", f_49_causa_b: "", f_49_tempo_b: "", f_49_cid_b: "",
          f_49_causa_c: "", f_49_tempo_c: "", f_49_cid_c: "", f_49_causa_d: "DESCOLAMENTO PREMATURO DE PLACENTA", f_49_tempo_d: "HORAS",
          f_49_cid_d: "P02.1", f_49_causa_p2: "", f_49_tempo_p2: "", f_49_cid_p2: "", f_50_nome_medico: "DRA. HELENA MOURA",
          f_51_crm: "CRM-PE 99993", f_52_atendeu: "1", f_53_contato: "(87) 99999-0004", f_54_data_atestado: "2026-09-17",
          f_56_tipo: "", f_57_trabalho: "", f_58_fonte: "", f_59_descricao: "", f_60_logradouro: "", f_60_codigo: "",
          f_61_declarante: "", f_62_testemunha_a: "", f_62_testemunha_b: ""
        },
        officialFeedback: "Em óbito fetal, o campo 11 deve ser obrigatoriamente preenchido como 'NATIMORTO'. Não use 'Natimorto' como causa de morte (campo 49); a causa básica é a afecção materna ou ovular (ex: DPP). O Bloco V foi totalmente preenchido."
      }
    };
