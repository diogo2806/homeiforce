import { renderHomePage } from './components/home/home-page.js';
import { initHeroContact } from './components/home/hero-contact.js';
import { initScreenManual } from './components/home/screen-manual.js';

const app = document.getElementById('app');

if (!app) {
  throw new Error('Elemento raiz #app não encontrado.');
}

app.innerHTML = renderHomePage();
initHeroContact(document);
initScreenManual(document);
