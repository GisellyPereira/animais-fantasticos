import ScrollSuave from './moduless/scroll-suave.js';
import Accordion from './moduless/accordion.js';
import initTabNav from './moduless/tabnav.js';
import initModal from './moduless/modal.js';
import initTooltip from './moduless/tooltip.js';
import initDropdownMenu from './moduless/dropdown-menu.js';
import initMenuMobile from './moduless/menu-mobile.js';
import initFuncionamento from './moduless/funcionamento.js';
import initFetchAnimais from './moduless/fetch-animais.js';
import initFetchBitcoin from './moduless/fetch-bitcoin.js';
import initAnimacaoScroll from './moduless/scroll-animacao.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"]');
accordion.init();




initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();