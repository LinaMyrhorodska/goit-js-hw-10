import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './css/fetchCountries.js';
import { countryCardItems, countryCardList } from './css/countryCard.js';

const DEBOUNCE_DELAY = 300;

const inputSearch = document.querySelector('[id=search-box]');
const listCountry = document.querySelector('.country-list');
const infoCountry = document.querySelector('.country-info');


inputSearch.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch() {
const name = inputSearch.value.trim();
if (name === '') {   
    cleaning();
    return;
}

fetchCountries(name)
    .then(countrys => {
        if (countrys.length > 10) {
            Notify.info('Too many matches found. Please enter a more specific name.')
            cleaning();
            return;
        }

        if (countrys.length <= 10 ) {
            const markup = countrys.map(country => countryCardItems(country));
            listCountry.innerHTML = markup.join('');
            infoCountry.innerHTML = '';
        }

        if (countrys.length === 1) {
            const secondMarkup = countrys.map(country => countryCardList(country));
            infoCountry.innerHTML = secondMarkup.join('');
            listCountry.innerHTML = '';
        }
    })
    .catch(error => {
        Notify.failure("Oops, there is no country with that name")
        cleaning();
        return error;
    });  
}

function cleaning() {
    listCountry.innerHTML = '';
    infoCountry.innerHTML = '';
}

