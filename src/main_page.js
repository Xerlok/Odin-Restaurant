'use strict';
import insta from './img/instagram.svg';
import facebook from './img/facebook.svg';
import jill from './img/jill.jpg';
import logo from './img/mei.jpg';

export default function renderMainPage() {
    const container = document.createElement('div');
    container.setAttribute('id', 'content');

    function createHeader() {
        const header = document.createElement('div');
        const menu = document.createElement('div');
        const homeBtn = document.createElement('button');
        const menuBtn = document.createElement('button');
        const contactBtn = document.createElement('button');
        const header1 = document.createElement('h1');
        const menu2 = document.createElement('div');
        const socials = document.createElement('div');
        const orderBtn = document.createElement('button');
        const img1 = document.createElement('img');
        const img2 = document.createElement('img');

        header.classList.add('header')
        menu.classList.add('menu');
        menu2.classList.add('menu2');
        homeBtn.classList.add('top-menu', 'home-btn');
        menuBtn.classList.add('top-menu', 'top-menu-btn');
        contactBtn.classList.add('top-menu', 'contact-btn');
        socials.classList.add('socials')
        orderBtn.classList.add('order-now');
        orderBtn.classList.add('top-menu');
        img1.classList.add('insta');
        img2.classList.add('facebook');

        homeBtn.innerText = 'Home';
        menuBtn.innerText = 'Menu';
        contactBtn.innerText = 'Contact Us';
        header1.innerHTML = `Cyber<br> bar`;
        orderBtn.innerText = 'Order Now';

        img1.setAttribute('alt', 'instagram');
        img1.src = insta;
        img2.setAttribute('alt', 'facebook');
        img2.src = facebook;

        menu.append(homeBtn, menuBtn, contactBtn);
        socials.append(img1, img2);
        menu2.append(socials, orderBtn);
        header.append(menu, header1, menu2);

        return {header, homeBtn, menuBtn, contactBtn};
    }

    function createMainContent() {
        const mainContent = document.createElement('div');
        const mainWrapp = document.createElement('div');
        const header2 = document.createElement('h2');
        const about = document.createElement('div')
        const aboutImg = document.createElement('img');
        const aboutText = document.createElement('div');
        const menuBtn = document.createElement('button');
        const hoursHeader = document.createElement('div');
        const hoursHeaderTxt = document.createElement('div')
        const imgHours1 = document.createElement('img');
        const hours = document.createElement('div')
        const hoursText = document.createElement('div');
        const imgHours2 = document.createElement('img');

        mainContent.classList.add('main-content');
        mainWrapp.classList.add('main-wrapper');
        about.classList.add('about');
        aboutImg.classList.add('about-img')
        aboutText.classList.add('about-text');
        menuBtn.classList.add('food-menu');
        menuBtn.classList.add('top-menu');
        hoursHeader.classList.add('hours-header');
        hoursHeaderTxt.classList.add('hours-header-txt');
        hours.classList.add('hours');
        hoursText.classList.add('hours-text')
        imgHours1.classList.add('hours-img');
        imgHours2.classList.add('hours-img');

        header2.innerText = 'Cyber Bar';
        aboutText.innerHTML = `
        Cyber bar is da bestest bar for future people.<br>
        We have the freshest processed foods in the whole Cyber City. We’re not your<br>
        typical bar and we like it that way.`;
        menuBtn.innerText = 'Our Menu';
        hoursHeaderTxt.innerHTML = `
        Hello, and welcome to our Cyberpunk Bar!<br>
        Our working hours:`;
        hoursText.innerHTML = `
        Monday: 6pm - 6am<br>
        Tuesday: 6pm - 6am<br>
        Wednesday: 6pm - 6am<br>
        Thursday: 6pm - 6am<br>
        Friday: 8pm - 10am<br>
        Saturday: 8pm - 10am<br>
        Sunday: 8pm - 10am`;

        aboutImg.src = jill;
        imgHours1.src = logo;
        imgHours2.src = logo;

        hoursHeader.append(hoursHeaderTxt, imgHours1);
        hours.append(hoursText, imgHours2);
        about.append(aboutImg, aboutText);
        mainWrapp.append(header2, about, menuBtn, hoursHeader, hours);
        mainContent.appendChild(mainWrapp);

        return {mainContent, mainWrapp};
    }

    function createFooter() {
        const footer = document.createElement('div');
        const copyright = document.createElement('div');

        footer.classList.add('footer');
        copyright.classList.add('copyright');

        copyright.innerText = `Copyright Cyber Bar 2023`;

        footer.appendChild(copyright);

        return footer;
    }

    const mainCont = createMainContent();
    const mainContent = mainCont.mainContent;
    const mainWrapp = mainCont.mainWrapp;
    const header = createHeader();
    container.append(header.header, mainContent, createFooter());

    const homeBtn = header.homeBtn;
    const menuBtn = header.menuBtn;
    const contactBtn = header.contactBtn;

    
    return {container, mainContent, mainWrapp, homeBtn, menuBtn, contactBtn};
}

