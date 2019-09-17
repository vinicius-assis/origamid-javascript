import Accordion from './modules/accordion.js'
import DropDown from './modules/dropdown.js'
import MenuMobile from './modules/menu-mobile.js'
import Modal from './modules/modal.js'
import ScrollAnima from './modules/scroll-anima.js'
import ScrollSuave from './modules/scroll-suave.js'
import TabNav from './modules/tabnav.js'
import Tooltip from './modules/tooltip.js'
import fetchAnimais from './modules/fetch-animais.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'
import initFuncionamento from './modules/funcionamento.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"] ')
scrollSuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init()

const modal = new Modal('[data-modal="container"]', '[data-modal="abrir"]', '[data-modal="fechar"]')
modal.init()

const toolTip = new Tooltip('[data-tooltip]')
toolTip.init()

const scrollAnima = new ScrollAnima('[data-anime="scroll"]')
scrollAnima.init()

const dropDown = new DropDown('[data-dropdown]')
dropDown.init()

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]')
menuMobile.init()

initFuncionamento()

fetchAnimais('../../animaisapi.json', '.numeros-grid')
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco')
