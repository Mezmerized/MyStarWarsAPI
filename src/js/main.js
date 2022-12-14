// Start up

const URL = 'https://swapi.dev/api/';

onload = [
    getFilms(),
    generateFilmsLoading(),
    getPeople(),
    generatePeopleLoading(),
    getPlanet(),
    generatePlanetLoading(),
    getSpecies(),
    generateSpeciesLoading()
];


// Eventlistener buttons

document.getElementById("getfilm").addEventListener("click", getFilms);
document.getElementById("getperson").addEventListener("click", getPeople);
document.getElementById("getplanet").addEventListener("click", getPlanet);
document.getElementById("getspecies").addEventListener("click", getSpecies);

// api function to fetch random film info 

async function getFilms(){ 
    generateFilmsLoading();

    const getFilmsObject = await fetch(URL + 'films');
    const filmsData = await getFilmsObject.json();
    const filmsObjectCount = Object.values(filmsData);
    count = filmsObjectCount[0];

    let randomFilm = Math.floor((Math.random() * count) + 1);
    const response = await fetch(URL + 'films/' + randomFilm);
    
    let lastRandomFilm = parseInt(response.url.substring(response.url.lastIndexOf('/') + 1));

    const data = await response.json();
    const { title, director, release_date } = data;

    if (response.status === 404) {
        document.getElementById('film_title').textContent = `Sorry ... could not load data. Error ${response.status}`;
        document.getElementById('film_director').textContent = `Sorry ... could not load data. Error ${response.status}`;
        document.getElementById('film_release_date').textContent = `Sorry ... could not load data. Error ${response.status}`;
    } else {
        document.getElementById('film_title').textContent = title;
        document.getElementById('film_director').textContent = director;
        document.getElementById('film_release_date').textContent = release_date;
    };
    console.log(response.url);
    console.log(randomFilm);
    console.log(lastRandomFilm);

};

// function to visualize films loading  

function generateFilmsLoading() {
    film_title.innerHTML            = '<i class="fas fa-circle-notch fa-spin fa-sw"></i>'
    film_director.innerHTML         = '<i class="fas fa-circle-notch fa-spin fa-sw"></i>'
    film_release_date.innerHTML     = '<i class="fas fa-circle-notch fa-spin fa-sw"></i>'
};

// api function to fetch random person info 

async function getPeople(){
    generatePeopleLoading();

    const getPeopleObject = await fetch(URL + 'people');
    const peopleData = await getPeopleObject.json();
    const peopleObjectCount = Object.values(peopleData);
    count = peopleObjectCount[0];

    let randomPerson = Math.floor((Math.random() * count) + 1);
    const response = await fetch(URL + 'people/' + randomPerson)
    const data = await response.json();
    const { name, birth_year, height } = data;

    if (response.status === 404) {
        document.getElementById('person_name').textContent = `Sorry ... could not load data. Error ${response.status}`;
        document.getElementById('person_birth_year').textContent = `Sorry ... could not load data. Error ${response.status}`;
        document.getElementById('person_height').textContent = `Sorry ... could not load data. Error ${response.status}`;
    } else {
        document.getElementById('person_name').textContent = name;
        document.getElementById('person_birth_year').textContent = birth_year;
        document.getElementById('person_height').textContent = height;
    };
};

// function to visualize people loading  

function generatePeopleLoading() {
    person_name.innerHTML           = '<i class="fas fa-circle-notch fa-spin fa-sw"></i>'
    person_birth_year.innerHTML     = '<i class="fas fa-circle-notch fa-spin fa-sw"></i>'
    person_height.innerHTML         = '<i class="fas fa-circle-notch fa-spin fa-sw"></i>'
};

// api function to fetch random planet info 

async function getPlanet(){
    generatePlanetLoading();

    const getPlanetsObject = await fetch(URL + 'planets');
    const planetsData = await getPlanetsObject.json();
    const planetssObjectCount = Object.values(planetsData);
    count = planetssObjectCount[0];

    let randomPlanet = Math.floor((Math.random() * count) + 1);
    const response = await fetch(URL + 'planets/' + randomPlanet);
    const data = await response.json();
    const { name, population, climate } = data;

    if (response.status === 404) {
        document.getElementById('planet_name').textContent = `Sorry ... could not load data. Error ${response.status}`;
        document.getElementById('planet_population').textContent = `Sorry ... could not load data. Error ${response.status}`;
        document.getElementById('planet_climate').textContent = `Sorry ... could not load data. Error ${response.status}`;
    } else {
        document.getElementById('planet_name').textContent = name;
        if (population === "unknown" || NaN){ 
            document.getElementById('planet_population').textContent = population
        } else {
            const internationalNumberFormat = new Intl.NumberFormat('en-US');
            document.getElementById('planet_population').textContent = internationalNumberFormat.format(population);
        }
        document.getElementById('planet_climate').textContent = climate;
    };
};

// function to visualize planets loading  

function generatePlanetLoading() {
    planet_name.innerHTML           = '<i class="fas fa-circle-notch fa-spin fa-sw"></i>'
    planet_population.innerHTML     = '<i class="fas fa-circle-notch fa-spin fa-sw"></i>'
    planet_climate.innerHTML        = '<i class="fas fa-circle-notch fa-spin fa-sw"></i>'
};

// api function to fetch random species info 

async function getSpecies(){
    generateSpeciesLoading();

    const getSpeciesObject = await fetch(URL + 'species');
    const speciesData = await getSpeciesObject.json();
    const speciesObjectCount = Object.values(speciesData);
    count = speciesObjectCount[0];

    let randomSpecies = Math.floor((Math.random() * count) + 1);
    const response = await fetch(URL + 'species/' + randomSpecies);
    const data = await response.json();
    const { name, classification, language } = data;
    
    if (response.status === 404) {
        document.getElementById('species_name').textContent = `Sorry ... could not load data. Error ${response.status}`;
        document.getElementById('species_classification').textContent = `Sorry ... could not load data. Error ${response.status}`;
        document.getElementById('species_language').textContent = `Sorry ... could not load data. Error ${response.status}`;
    } else {
        document.getElementById('species_name').textContent = name;
        document.getElementById('species_classification').textContent = classification;
        document.getElementById('species_language').textContent = language;
    };
};

// function to visualize species loading  

function generateSpeciesLoading() {
    species_name.innerHTML              = '<i class="fas fa-circle-notch fa-spin fa-sw"></i>'
    species_classification.innerHTML    = '<i class="fas fa-circle-notch fa-spin fa-sw"></i>'
    species_language.innerHTML          = '<i class="fas fa-circle-notch fa-spin fa-sw"></i>'
};