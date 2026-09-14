# homeiforce

Landing page pública da iForce para apresentação do Práxis e do Guardião e captação de solicitações comerciais.

## Estrutura do frontend

A aplicação é estática, servida pelo Nginx, sem framework e sem etapa de build. O `index.html` funciona apenas como shell e carrega o stylesheet global e o módulo principal.

```text
index.html
frontend/
└── src/
    ├── main.js
    ├── components/
    │   └── home/
    │       ├── audience-choice.js
    │       ├── content-sections.js
    │       ├── footer.js
    │       ├── header.js
    │       ├── hero-contact.js
    │       ├── home-page.js
    │       └── screen-manual.js
    └── shared/
        └── styles/
            └── index.css
```

Toda a composição visual da home fica em `frontend/src/components`. Todos os estilos ficam em `frontend/src/shared/styles/index.css`, que é o único ponto de entrada CSS da aplicação.

## Formulário de contato

O formulário envia `POST /api/leads` com JSON no formato:

```json
{
  "nome": "Nome da pessoa",
  "email": "nome@empresa.com",
  "produto": "Praxis"
}
```

`produto` aceita `Praxis` ou `Guardiao`. O Nginx encaminha a rota pública para `${LEADS_API_BASE_URL}/api/v1/public/leads`.

Durante o envio, o botão é desabilitado para evitar duplicidade. A requisição possui timeout de 10 segundos. Em caso de falha ou timeout, os dados preenchidos permanecem no formulário. Em caso de sucesso, o formulário é limpo e a seleção de produto retorna ao estado neutro.

## Manual da Tela

A home possui o botão `Manual da Tela`, identificado visualmente pelo ícone `BookOpen`, com `aria-label`, `title` e abertura em `dialog` nativo. O conteúdo documenta finalidade da página, campos, ações, ausência de filtros e autenticação, regras do fluxo e estados de sucesso e erro.
