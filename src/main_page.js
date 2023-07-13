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
        const socials = document.createElement('div');
        const orderBtn = document.createElement('button');
        const img1 = document.createElement('img');
        const img2 = document.createElement('img');

        header.classList.add('header')
        menu.classList.add('menu');
        homeBtn.classList.add('top-menu');
        menuBtn.classList.add('top-menu');
        contactBtn.classList.add('top-menu');
        socials.classList.add('socials')
        orderBtn.classList.add('order-now');
        img1.classList.add('insta');
        img2.classList.add('facebook');

        homeBtn.innerText = 'Home';
        menuBtn.innerText = 'Menu';
        contactBtn.innerText = 'Contact Us';
        header1.innerHTML = `Cyber<br> bar`;
        orderBtn.innerText = 'Order Now';

        img1.setAttribute('alt', 'instagram');
        img2.setAttribute('alt', 'facebook');

        menu.append(homeBtn, menuBtn, contactBtn);
        socials.append(img1, img2);
        header.append(menu, header1, socials, orderBtn);

        return header;
    }

    function createMainContent() {
        const mainWrapp = document.createElement('div');
        const header2 = document.createElement('h2');
        const aboutText = document.createElement('div');
        const menuBtn = document.createElement('button');
        const hoursHeader = document.createElement('div');
        const hoursText = document.createElement('div');

        mainWrapp.classList.add('main-wrapper');
        aboutText.classList.add('about-text');
        menuBtn.classList.add('food-menu');
        hoursHeader.classList.add('hours-header');
        hoursText.classList.add('hours-text');

        header2.innerText = 'Cyber Bar';
        aboutText.innerHTML = `
        Cyber bar is da bestest bar for future people.<br>
        We have the freshest processed foods in the whole Cyber City. We’re not your<br>
        typical bar and we like it that way.`;
        menuBtn.innerText = 'Our Menu';
        hoursHeader.innerHTML = `
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

        mainWrapp.append(header2, aboutText, menuBtn, hoursHeader, hoursText);

        return mainWrapp;
    }

    function createFooter() {
        const footer = document.createElement('div');
        const copyright = document.createElement('div');

        footer.classList.add('footer');
        copyright.classList.add('copyright');

        copyright.innerText = `That's like your opinion man 2023`;

        footer.appendChild(copyright);

        return footer;
    }

    container.append(createHeader(), createMainContent(), createFooter());
    return container;
}

