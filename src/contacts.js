'use strict';
import keck from './img/map.png';

export default function renderContacts() {
    const contacts_wrapper = document.createElement('div');
    const contacts_header = document.createElement('div');
    const contacts = document.createElement('div');
    const address = document.createElement('div');
    const map = document.createElement('img');
    const left_side = document.createElement('div');
    const right_side = document.createElement('div');

    contacts_wrapper.classList.add('contacts-wrapper');
    contacts_header.classList.add('contacts-header');
    contacts.classList.add('contacts');
    address.classList.add('address');
    map.classList.add('map');

    contacts_header.innerText = 'Our Contacts';
    contacts.innerHTML = `
    Phone: +345 875 64 28<br>
    Email: cyber@bar.com`;
    address.innerHTML = `
    CYBER BAR<br>
    Old port 3727<br>
    Keck, Cyprus`;
    map.src = keck;
    map.alt = 'map of the bar location';

    contacts_wrapper.append(contacts_header, contacts, address, map);

    return contacts_wrapper;
}