import { translations } from './lang/translations.js';
let locale = 'en';

let elements = document.getElementsByClassName('translate');

translate();

document.getElementById('lang').addEventListener('change', (event) => {
    locale = event.currentTarget.value;
    translate();
});

function translate() {
    [...elements].map(element => {
        const attribute = element.getAttribute('data-trans');
        element.innerText = translations[locale][attribute];
    });
}