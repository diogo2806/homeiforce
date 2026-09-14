import { renderHeader } from './header.js';
import { renderHeroContact } from './hero-contact.js';
import { renderAudienceChoice } from './audience-choice.js';
import {
  renderNicheSection,
  renderProductCards,
  renderStepsSection,
  renderRiskSection,
  renderFaqSection,
  renderFinalCta
} from './content-sections.js';
import { renderScreenManual } from './screen-manual.js';
import { renderFooter } from './footer.js';

export function renderHomePage() {
  return `
    ${renderHeader()}
    <main>
      ${renderHeroContact()}
      ${renderAudienceChoice()}
      ${renderNicheSection()}
      ${renderProductCards()}
      ${renderStepsSection()}
      ${renderRiskSection()}
      ${renderFaqSection()}
      ${renderFinalCta()}
    </main>
    ${renderFooter()}
    ${renderScreenManual()}`;
}
