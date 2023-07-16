'use strict';
import './styles.css';
import renderMainPage from './main_page';
import renderMenuPage from './menu';

const main = renderMainPage();
const mainWrapper = main.mainWrapp;

document.body.appendChild(main.container);

function removeAllChildren(yourNode) {
    while (yourNode.hasChildNodes()) {
        yourNode.removeChild(yourNode.firstChild);
    }
}

function switchPage (page) {
    removeAllChildren(main.mainWrapp);
    mainWrapper.appendChild(page);
}

switchPage(renderMenuPage());