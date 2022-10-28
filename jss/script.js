import ScrollSuave from './moduless/scroll-suave.js';
import Accordion from './moduless/accordion.js';
import TabNav from './moduless/tabnav.js';
import Modal from './moduless/modal.js';
import Tooltip from './moduless/tooltip.js';
import initDropdownMenu from './moduless/dropdown-menu.js';
import initMenuMobile from './moduless/menu-mobile.js';
import initFuncionamento from './moduless/funcionamento.js';
import fetchAnimais from './moduless/fetch-animais.js';
import fetchBitcoin from './moduless/fetch-bitcoin.js';
import initAnimacaoScroll from './moduless/scroll-animacao.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');


initDropdownMenu();
initMenuMobile();
initFuncionamento();
initAnimacaoScroll();
