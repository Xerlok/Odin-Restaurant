'use strict';
import './styles.css';
import renderMainPage from './main_page';
import renderMenuPage from './menu';
import renderContacts from './contacts';

const main = renderMainPage();

document.body.appendChild(main.container);

function removeAllChildren(yourNode) {
    while (yourNode.hasChildNodes()) {
        yourNode.removeChild(yourNode.firstChild);
    }
}

function switchPage (page) {
    removeAllChildren(main.mainContent);
    main.mainContent.appendChild(page);
}

main.menuBtn.addEventListener('click', () => {
    switchPage(renderMenuPage());
})

main.homeBtn.addEventListener('click', () => {
    switchPage(main.mainWrapp);
})

main.contactBtn.addEventListener('click', () => {
    switchPage(renderContacts());
})