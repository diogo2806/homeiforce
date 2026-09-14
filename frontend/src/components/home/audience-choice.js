export function renderAudienceChoice() {
  return `
    <section class="choice">
      <div class="container choice-grid">
        <div class="choice-intro">
          <strong>Qual cenário representa sua necessidade?</strong>
          <span>Cada produto possui público, problema e abordagem próprios.</span>
        </div>
        <a class="choice-card" href="#praxis" data-product="Praxis">
          <small>Para RH e recrutamento</small>
          <strong>Quero conhecer o Práxis</strong>
          <p>Avaliações, competências e resultados auditáveis.</p>
        </a>
        <a class="choice-card" href="#guardiao" data-product="Guardiao">
          <small>Para prefeituras</small>
          <strong>Quero conhecer o Guardião</strong>
          <p>Chamados, equipes, ordens de serviço e ativos.</p>
        </a>
      </div>
    </section>`;
}
