const PRODUCT_COPY = {
  Praxis: {
    title: 'Solicite uma apresentação do Práxis',
    support: 'A conversa será direcionada ao seu processo de recrutamento e seleção.'
  },
  Guardiao: {
    title: 'Solicite uma apresentação do Guardião',
    support: 'A conversa será direcionada à realidade da sua prefeitura ou secretaria.'
  }
};

const DEFAULT_COPY = {
  title: 'Qual solução você quer conhecer?',
  support: 'Selecione o produto para receber uma apresentação adequada ao seu setor.'
};

function setStatus(status, message, state = 'neutral') {
  status.textContent = message;
  status.dataset.state = state;
}

function updateProductCopy(product, title, support) {
  const copy = PRODUCT_COPY[product.value] ?? DEFAULT_COPY;
  title.textContent = copy.title;
  support.textContent = copy.support;
}

export function renderHeroContact() {
  return `
    <section class="hero" id="inicio">
      <div class="container hero-grid">
        <div>
          <span class="badge">Duas soluções, dois contextos diferentes</span>
          <h1>Escolha a solução criada para <span>o seu setor.</span></h1>
          <p class="hero-copy">A iForce oferece produtos especializados para equipes de RH que precisam avaliar candidatos com critérios claros e para prefeituras que precisam organizar a manutenção de ativos públicos.</p>
          <ul class="hero-list">
            <li><strong>Práxis:</strong>&nbsp; avaliações situacionais para recrutamento e seleção.</li>
            <li><strong>Guardião:</strong>&nbsp; chamados, ordens de serviço e ativos públicos.</li>
            <li>A apresentação é direcionada ao produto e ao contexto selecionados.</li>
          </ul>
          <div class="audiences">
            <span>RH e recrutamento</span>
            <span>Prefeituras e gestão pública</span>
            <span>Atendimento por solução</span>
          </div>
        </div>
        <aside class="form-card" id="contato">
          <h2 data-contact-title>${DEFAULT_COPY.title}</h2>
          <p data-contact-support>${DEFAULT_COPY.support}</p>
          <form class="form" id="leadForm" novalidate>
            <div class="field">
              <label for="nome">Seu nome</label>
              <input id="nome" name="nome" type="text" autocomplete="name" placeholder="Como podemos chamar você?" required>
            </div>
            <div class="field">
              <label for="email">E-mail profissional</label>
              <input id="email" name="email" type="email" autocomplete="email" placeholder="nome@empresa.com" required>
            </div>
            <div class="field">
              <label for="produto">Solução</label>
              <select id="produto" name="produto" required>
                <option value="">Selecione</option>
                <option value="Praxis">Práxis — para RH e recrutamento</option>
                <option value="Guardiao">Guardião — para prefeituras</option>
              </select>
            </div>
            <button class="btn" type="submit">Quero solicitar uma apresentação</button>
            <p class="privacy">Seus dados serão usados apenas para responder ao contato.</p>
            <p class="status" id="status" aria-live="polite"></p>
          </form>
        </aside>
      </div>
    </section>`;
}

export function initHeroContact(root = document) {
  const form = root.getElementById('leadForm');
  const product = root.getElementById('produto');
  const title = root.querySelector('[data-contact-title]');
  const support = root.querySelector('[data-contact-support]');
  const status = root.getElementById('status');

  if (!form || !product || !title || !support || !status) return;

  root.querySelectorAll('[data-product]').forEach((link) => {
    link.addEventListener('click', () => {
      product.value = link.dataset.product;
      product.dispatchEvent(new Event('change'));
    });
  });

  product.addEventListener('change', () => updateProductCopy(product, title, support));

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const nome = String(data.get('nome') || '').trim();
    const email = String(data.get('email') || '').trim();
    const produto = String(data.get('produto') || '').trim();
    const emailInput = root.getElementById('email');
    const button = form.querySelector('button[type="submit"]');

    if (!nome || !email || !produto) {
      setStatus(status, 'Preencha os três campos para continuar.', 'error');
      return;
    }

    if (!emailInput?.checkValidity()) {
      setStatus(status, 'Informe um e-mail válido.', 'error');
      emailInput?.focus();
      return;
    }

    if (!PRODUCT_COPY[produto]) {
      setStatus(status, 'Selecione uma solução válida para continuar.', 'error');
      product.focus();
      return;
    }

    if (!button || button.disabled) return;

    const originalText = button.textContent;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    button.disabled = true;
    button.textContent = 'Enviando...';
    setStatus(status, 'Enviando solicitação...', 'neutral');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ nome, email, produto }),
        signal: controller.signal
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      form.reset();
      product.dispatchEvent(new Event('change'));
      setStatus(status, 'Solicitação enviada. Entraremos em contato pelo e-mail informado.', 'success');
    } catch (_error) {
      setStatus(status, 'Não foi possível enviar sua solicitação agora. Seus dados foram mantidos; tente novamente.', 'error');
    } finally {
      clearTimeout(timeout);
      button.disabled = false;
      button.textContent = originalText;
    }
  });
}
