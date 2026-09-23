# Simulador de Preenchimento da Declaração de Óbito (DO)

Aplicação web educacional para treinamento do preenchimento da Declaração de Óbito (DO), com casos clínicos, formulário visual, validações pedagógicas e auditoria dos campos.

## Estrutura

```text
simulador-do/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── cases.js
│   ├── ui.js
│   ├── audit.js
│   └── app.js
└── README.md
```

### Responsabilidade de cada arquivo

- **`index.html`** — estrutura semântica da aplicação e campos do formulário.
- **`css/style.css`** — identidade visual, formulário da DO, responsividade, acessibilidade e impressão.
- **`js/cases.js`** — banco de casos clínicos, dados ideais e regras de validação específicas de cada caso.
- **`js/ui.js`** — estado da interface, abas móveis, carimbo, reset, preenchimento automático, impressão e utilitários.
- **`js/audit.js`** — regras de auditoria, detecção de inconsistências e renderização do resultado da auditoria.
- **`js/app.js`** — inicialização da aplicação e carregamento dos casos.
- **`README.md`** — documentação do projeto.

## Como executar

Não há servidor obrigatório para a versão atual.

1. Baixe ou clone o repositório.
2. Mantenha a estrutura de pastas exatamente como apresentada acima.
3. Abra `index.html` no navegador.

Para publicar gratuitamente, a aplicação pode ser hospedada como site estático em serviços compatíveis com HTML/CSS/JavaScript.

## Dependências externas

A interface utiliza:

- Tailwind CSS via CDN;
- Google Fonts (`Inter` e `Share Tech Mono`).

A lógica principal da aplicação está em JavaScript puro, sem framework obrigatório.

## Organização do JavaScript

A ordem dos scripts no `index.html` é deliberada:

```html
<script src="js/cases.js"></script>
<script src="js/ui.js"></script>
<script src="js/audit.js"></script>
<script src="js/app.js"></script>
```

- `cases.js` precisa carregar antes dos módulos que consultam `CASES`.
- `ui.js` disponibiliza estado e utilitários usados pela auditoria.
- `audit.js` executa as regras de validação.
- `app.js` é carregado por último e inicializa a aplicação.

## Escopo educacional

O simulador é uma ferramenta de treinamento. As mensagens de auditoria representam regras pedagógicas implementadas no software e não substituem:

- legislação e normativas vigentes;
- manuais oficiais do Ministério da Saúde;
- normas profissionais;
- protocolos institucionais;
- julgamento clínico e responsabilidade profissional.

Antes de utilizar o simulador em atividade institucional, recomenda-se revisar periodicamente as regras, campos e textos de acordo com a versão vigente da Declaração de Óbito e das normas aplicáveis.

## Desenvolvimento

Para alterar a apresentação:

```text
css/style.css
```

Para adicionar ou modificar casos:

```text
js/cases.js
```

Para alterar regras de auditoria:

```text
js/audit.js
```

Para alterar comportamento da interface:

```text
js/ui.js
```

Para alterar inicialização e fluxo geral:

```text
js/app.js
```

## Controle de versão sugerido

Commits pequenos e temáticos facilitam a manutenção:

```text
refactor: separate CSS from index
refactor: separate clinical cases
refactor: separate audit logic
refactor: separate interface logic
refactor: create application controller
refactor: modularize HTML
docs: add project README
```

