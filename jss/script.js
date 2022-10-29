import ScrollSuave from './moduless/scroll-suave.js';
import Accordion from './moduless/accordion.js';
import TabNav from './moduless/tabnav.js';
import Modal from './moduless/modal.js';
import Tooltip from './moduless/tooltip.js';
import ScrollAnima from './moduless/scroll-anima.js';
import DropdownMenu from './moduless/dropdown-menu.js';
import MenuMobile from './moduless/menu-mobile.js';
import Funcionamento from './moduless/funcionamento.js';
import fetchAnimais from './moduless/fetch-animais.js';
import fetchBitcoin from './moduless/fetch-bitcoin.js';


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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdown = new DropdownMenu('[data-dropdown]');
dropdown.init();

const menuMobile = new MenuMobile('[data-menu="button"]','[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
