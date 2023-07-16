'use strict';
import placeholder from './img/placeholder.jpg'

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

    createDrink('Beer', '10$', placeholder, 'beer glass');
    createDrink('Wine', '20$', placeholder, 'red wine glass');
    createDrink('Vodka', '35$', placeholder, 'vodka shot');
    createDrink('Absent', '50$', placeholder, 'absent shot');
    createDrink('Mohito', '25$', placeholder, 'mohito coctail');
    createDrink('Kek', '115$', placeholder, 'Big Kek');

    createDrink('Beer', '10$', placeholder, 'beer glass');
    createDrink('Wine', '20$', placeholder, 'red wine glass');
    createDrink('Vodka', '35$', placeholder, 'vodka shot');
    createDrink('Absent', '50$', placeholder, 'absent shot');
    createDrink('Mohito', '25$', placeholder, 'mohito coctail');
    createDrink('Kek', '115$', placeholder, 'Big Kek');

    
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

    menu_header.innerText = 'Our Menu:';

    menu_wrapper.append(menu_header, menu_items);

    return menu_wrapper;
}