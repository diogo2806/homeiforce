export function renderScreenManual() {
  return `
    <dialog class="screen-manual" id="screenManual" aria-labelledby="screenManualTitle" aria-describedby="screenManualIntro">
      <div class="screen-manual__panel">
        <div class="screen-manual__header">
          <div>
            <span class="eyebrow">Ajuda da página</span>
            <h2 id="screenManualTitle">Manual da Tela</h2>
          </div>
          <button class="screen-manual__close" type="button" data-screen-manual-close aria-label="Fechar Manual da Tela" title="Fechar Manual da Tela">×</button>
        </div>
        <div class="screen-manual__content">
          <p id="screenManualIntro">Esta home apresenta as soluções Práxis e Guardião e permite solicitar uma apresentação comercial direcionada ao contexto selecionado.</p>

          <section>
            <h3>Campos do formulário</h3>
            <ul>
              <li><strong>Seu nome:</strong> informe como a equipe deve identificar você no contato.</li>
              <li><strong>E-mail profissional:</strong> informe um endereço de e-mail válido para retorno.</li>
              <li><strong>Solução:</strong> escolha Práxis, para RH e recrutamento, ou Guardião, para prefeituras e gestão pública.</li>
            </ul>
          </section>

          <section>
            <h3>Botões, atalhos e ações</h3>
            <ul>
              <li><strong>Solicitar apresentação:</strong> leva ao formulário de contato.</li>
              <li><strong>Atalhos Práxis e Guardião:</strong> levam à seção da solução e já selecionam o produto correspondente no formulário.</li>
              <li><strong>Quero solicitar uma apresentação:</strong> envia os dados preenchidos para o atendimento comercial.</li>
              <li><strong>Dúvidas frequentes:</strong> abra cada pergunta para visualizar a resposta.</li>
            </ul>
          </section>

          <section>
            <h3>Filtros e permissões</h3>
            <p>A tela não possui filtros. Ela é pública, não exige autenticação e não depende de perfil ou permissão para consulta e envio do formulário.</p>
          </section>

          <section>
            <h3>Regras de uso e fluxo principal</h3>
            <ol>
              <li>Escolha a solução pelo seletor ou por um dos atalhos da página.</li>
              <li>Informe nome e e-mail profissional.</li>
              <li>Envie a solicitação. Durante o envio, o botão fica bloqueado para evitar requisições duplicadas.</li>
              <li>Em caso de sucesso, o formulário é limpo e a solução volta ao estado neutro.</li>
              <li>Em caso de falha ou timeout, os dados digitados são mantidos para nova tentativa.</li>
            </ol>
          </section>

          <section>
            <h3>Mensagens e estados</h3>
            <ul>
              <li><strong>Campos incompletos:</strong> a tela orienta preencher os três campos.</li>
              <li><strong>E-mail inválido:</strong> a tela solicita um endereço válido.</li>
              <li><strong>Enviando:</strong> o botão exibe “Enviando...” e fica temporariamente desabilitado.</li>
              <li><strong>Sucesso:</strong> informa que a solicitação foi enviada e que o contato ocorrerá pelo e-mail informado.</li>
              <li><strong>Erro ou timeout:</strong> informa que o envio não foi concluído e orienta tentar novamente sem apagar os dados.</li>
            </ul>
          </section>
        </div>
      </div>
    </dialog>`;
}

export function initScreenManual(root = document) {
  const dialog = root.getElementById('screenManual');
  const openButton = root.querySelector('[data-screen-manual-open]');
  const closeButton = root.querySelector('[data-screen-manual-close]');
  let returnFocusTo = null;

  if (!dialog || !openButton || !closeButton) return;

  openButton.addEventListener('click', () => {
    returnFocusTo = openButton;
    dialog.showModal();
    closeButton.focus();
  });

  closeButton.addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener('close', () => {
    returnFocusTo?.focus();
  });
}
