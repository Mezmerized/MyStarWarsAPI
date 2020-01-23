# HTML/JS - Star Wars API

A visualization for the Star Wars API (SWAPi). 

Using a fetch function to make calls to various API end points. Including a randomized varibale to randomly browse through the API's data endpoints

Current methods are:

getFilms() - fetches and returns specific details from randomly selected api-films-endpoint and inserts them to designated HTML elements

getPeople() - fetches and returns specific details from randomly selected api-people-endpoint and inserts them to designated HTML elements

getPlanets - fetches and returns specific details from randomly selected api-planets-endpoint and inserts them to designated HTML elements

getSpecies - fetches and returns specific details from randomly selected api-Species-endpoint and inserts them to designated HTML elements

Randomizer Variable:

let randomFilm = Math.floor((Math.random() * "x") + 1);

x differs from endpoint to endpoint
