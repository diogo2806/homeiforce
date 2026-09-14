const BOOK_OPEN_ICON = `
  <svg class="manual-icon" data-icon="BookOpen" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M2.5 5.5A2.5 2.5 0 0 1 5 3h4a3 3 0 0 1 3 3v15a3 3 0 0 0-3-3H5a2.5 2.5 0 0 0-2.5 2.5z"/>
    <path d="M21.5 5.5A2.5 2.5 0 0 0 19 3h-4a3 3 0 0 0-3 3v15a3 3 0 0 1 3-3h4a2.5 2.5 0 0 1 2.5 2.5z"/>
  </svg>`;

export function renderHeader() {
  return `
    <header class="header">
      <div class="container header-inner">
        <a class="brand" href="#inicio" aria-label="iForce Tecnologia">
          <span class="brand-logo-frame">
            <img
              class="brand-logo-image"
              src="/iforce-logo.svg?v=3"
              alt="iForce Tecnologia"
              width="190"
              height="72"
            >
          </span>
        </a>
        <div class="header-actions">
          <button
            class="manual-trigger"
            type="button"
            data-screen-manual-open
            aria-label="Abrir Manual da Tela"
            title="Manual da Tela"
          >
            ${BOOK_OPEN_ICON}
            <span>Manual da Tela</span>
          </button>
          <a class="header-cta" href="#contato">Solicitar apresentação</a>
        </div>
      </div>
    </header>`;
}
