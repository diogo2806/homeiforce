export function renderNicheSection() {
  return `
    <section class="section soft">
      <div class="container">
        <span class="eyebrow">Problemas diferentes exigem soluções diferentes</span>
        <h2 class="title">A conversa começa pelo contexto do cliente, não pela tecnologia.</h2>
        <p class="lead">O Práxis e o Guardião não são variações do mesmo produto. Cada sistema foi criado para um setor, com usuários, objetivos e fluxos próprios.</p>
        <div class="niche-grid">
          <article class="card">
            <span class="pill">RH e recrutamento</span>
            <h3>Quando a seleção precisa de critérios claros</h3>
            <p>Equipes de RH precisam estruturar avaliações, comparar resultados e documentar critérios sem transferir a decisão final para o sistema.</p>
            <ul class="check">
              <li>Competências e pesos definidos pela organização.</li>
              <li>Resultados por candidato e competência.</li>
              <li>Rastreabilidade para apoiar a decisão humana.</li>
            </ul>
            <a class="link" href="#praxis" data-product="Praxis">Ver solução para RH →</a>
          </article>
          <article class="card">
            <span class="pill">Prefeituras e gestão pública</span>
            <h3>Quando a manutenção pública precisa sair do improviso</h3>
            <p>Gestores públicos precisam centralizar solicitações, organizar equipes, acompanhar prazos e registrar a manutenção dos ativos municipais.</p>
            <ul class="check">
              <li>Chamados e triagem em um fluxo único.</li>
              <li>Ordens de serviço com responsáveis.</li>
              <li>Histórico de ativos, execução e transparência.</li>
            </ul>
            <a class="link" href="#guardiao" data-product="Guardiao">Ver solução para prefeituras →</a>
          </article>
        </div>
      </div>
    </section>`;
}

export function renderProductCards() {
  return `
    <section class="section">
      <div class="container">
        <span class="eyebrow">Soluções especializadas</span>
        <h2 class="title">Cada produto fala com um público específico.</h2>
        <p class="lead">A apresentação, os exemplos e as perguntas comerciais são diferentes para RH e para gestão pública.</p>
        <div class="product-grid">
          <article class="card product" id="praxis">
            <div class="product-top"><div class="icon">PX</div><span class="available">Disponível</span></div>
            <h3>Práxis</h3>
            <p>Avaliações situacionais para processos seletivos com critérios explícitos e resultados organizados por competência.</p>
            <ul class="check">
              <li>Estruture avaliações alinhadas às competências da vaga.</li>
              <li>Compare resultados com critérios objetivos.</li>
              <li>Mantenha a decisão final sob responsabilidade humana.</li>
              <li>Organize a jornada dos candidatos.</li>
            </ul>
            <a class="link" href="#contato" data-product="Praxis">Solicitar apresentação do Práxis →</a>
          </article>
          <article class="card product" id="guardiao">
            <div class="product-top"><div class="icon">GD</div><span class="available">Disponível</span></div>
            <h3>Guardião</h3>
            <p>Gestão preventiva e corretiva de ativos públicos, conectando solicitações, equipes, patrimônio e acompanhamento.</p>
            <ul class="check">
              <li>Centralize chamados, triagem e ordens de serviço.</li>
              <li>Acompanhe equipes, prazos e execução.</li>
              <li>Registre histórico para auditoria e transparência.</li>
              <li>Ofereça visibilidade do atendimento.</li>
            </ul>
            <a class="link" href="#contato" data-product="Guardiao">Solicitar apresentação do Guardião →</a>
          </article>
        </div>
      </div>
    </section>`;
}

export function renderStepsSection() {
  return `
    <section class="section soft">
      <div class="container">
        <span class="eyebrow">Como funciona</span>
        <h2 class="title">Da conversa inicial à demonstração do produto.</h2>
        <div class="steps">
          <article class="step"><span>PASSO 1</span><h3>Você informa o interesse</h3><p>Escolha o produto correspondente ao seu setor.</p></article>
          <article class="step"><span>PASSO 2</span><h3>Entendemos o contexto</h3><p>Identificamos o processo atual, os usuários e o objetivo.</p></article>
          <article class="step"><span>PASSO 3</span><h3>Apresentamos a solução</h3><p>A demonstração prioriza os fluxos relevantes para sua operação.</p></article>
        </div>
      </div>
    </section>`;
}

export function renderRiskSection() {
  return `
    <section class="section">
      <div class="container risk">
        <div>
          <span class="eyebrow">Sem compromisso</span>
          <h2 class="title">Uma conversa antes de qualquer decisão.</h2>
          <p class="lead">A solicitação não representa contratação. O objetivo é verificar se a solução atende ao seu cenário antes de avançar.</p>
        </div>
        <aside class="dark-card">
          <h3>O que você recebe</h3>
          <ul class="check">
            <li>Visão objetiva do produto escolhido.</li>
            <li>Demonstração dos principais fluxos.</li>
            <li>Espaço para dúvidas técnicas e de negócio.</li>
            <li>Próximos passos apenas quando houver aderência.</li>
          </ul>
        </aside>
      </div>
    </section>`;
}

export function renderFaqSection() {
  return `
    <section class="section soft">
      <div class="container">
        <span class="eyebrow">Dúvidas frequentes</span>
        <h2 class="title">Antes da apresentação</h2>
        <div class="faq">
          <details><summary>A apresentação tem custo?</summary><p>Não. O contato inicial serve para conhecer o cenário e demonstrar a solução selecionada.</p></details>
          <details><summary>Preciso contratar depois?</summary><p>Não. A apresentação não gera obrigação de contratação.</p></details>
          <details><summary>Para quem é o Práxis?</summary><p>Para profissionais de RH, recrutamento e seleção que desejam estruturar avaliações situacionais com critérios explícitos.</p></details>
          <details><summary>Para quem é o Guardião?</summary><p>Para prefeituras, secretarias e equipes responsáveis por manutenção, patrimônio, infraestrutura e conservação de ativos públicos.</p></details>
          <details><summary>Como meus dados serão usados?</summary><p>Somente para responder à solicitação e organizar a apresentação.</p></details>
        </div>
      </div>
    </section>`;
}

export function renderFinalCta() {
  return `
    <section class="final">
      <div class="container">
        <h2>Descubra qual solução atende ao seu processo.</h2>
        <p>Solicite uma apresentação direcionada ao seu setor e avalie o produto antes de qualquer decisão.</p>
        <a class="btn" href="#contato">Quero solicitar uma apresentação</a>
        <small>Sem compromisso de contratação.</small>
      </div>
    </section>`;
}
