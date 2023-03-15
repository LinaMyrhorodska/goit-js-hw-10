export function countryCardItems({ flags, name }) {
    return `
    <li class="country_list">
    <img class="country_container_flags" src=${flags.svg} alt= "flag of${name.official}"/>
    <h2 class="country_header">${name.official}</h2>
    </li>`
};

export function countryCardList({ name, capital, population, flags, languages }) {
    return`
   
    <div class = "country_container_wraper">
     <img class = "country_container_flags" src=${flags.svg} alt="Flag of ${name.common}" width="50" />
    <h2>${name.official}</h2>
    </div>
    <p><span class="country_span">Capital: </span>${capital}</p>
    <p><span class="country_span">Population: </span>${population}</p>
      <p"><span class="country_span">Language(s): </span>${Object.values(languages)}</p>
    `
}


