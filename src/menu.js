'use strict';
import placeholder from './img/placeholder.jpg';
import kek from './img/kek.jpg';
import mojito from './img/mojito.png';
import daiquiri from './img/daiquiri.png';
import manhattan from './img/manhattan.png';
import mule from './img/mule.png';
import pina from './img/pina.png';
import russian from './img/russian.png';
import beer from './img/beer.png';
import vodka from './img/vodka.png';
import wine from './img/wine.png';
import absent from './img/absent.png';
import spiritus from './img/spiritus.png';

export default function renderMenuPage() {
    const menu_wrapper = document.createElement('div');
    const menu_header = document.createElement('h3');
    const menu_items = document.createElement('div');

    function Drink (name, price, img, imgAlt) {
        this.name = name;
        this.price = price;
        this.img = img;
        this.imgAlt = imgAlt;
    }

    let drinks = [];

    function createDrink(name, price, img, imgAlt) {
        const newDrink = new Drink (name, price, img, imgAlt);
        drinks.push(newDrink);
    }

    createDrink('Mojito', '10$', mojito, 'beer glass');
    createDrink('Manhattan', '20$', manhattan, 'red wine glass');
    createDrink('Daiquiri', '35$', daiquiri, 'vodka shot');
    createDrink('Moscow Mule', '20$', mule, 'absent shot');
    createDrink('Piña Colada', '20$', pina, 'mohito coctail');
    createDrink('White Russian', '30$', russian, 'Big Kek');

    createDrink('Beer', '5$', beer, 'beer glass');
    createDrink('Wine', '10$', wine, 'red wine glass');
    createDrink('Vodka', '15$', vodka, 'vodka shot');
    createDrink('Absent', '20$', absent, 'absent shot');
    createDrink('Spirytus', '30$', spiritus, 'mohito coctail');
    createDrink('Big Kek', '115$', kek, 'Big Kek');

    
    for (let i = 0; i < drinks.length; i++) {
        const drink = document.createElement('div');
        const img = document.createElement('img');
        const drinkName = document.createElement('div');
        const drinkPrice = document.createElement('dic');

        drink.classList.add('drink');
        img.classList.add('drink-img');
        drinkName.classList.add('drink-name');
        drinkPrice.classList.add('drink-price');

        img.src = drinks[i].img;
        img.alt = drinks[i].imgAlt;
        drinkName.innerText = drinks[i].name;
        drinkPrice.innerText = drinks[i].price;

        drink.append(img, drinkName, drinkPrice);
        menu_items.appendChild(drink);
    }

    menu_wrapper.classList.add('menu-wrapper');
    menu_header.classList.add('menu-header');
    menu_items.classList.add('menu-items');

    menu_header.innerText = 'Our Menu';

    menu_wrapper.append(menu_header, menu_items);

    return menu_wrapper;
}