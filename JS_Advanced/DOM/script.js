let superHeroesHeadingElement = document.getElementById('superheroes-heading');
superHeroesHeadingElement.textContent += " from MCU and DCU"

let superheroSectionElement = document.getElementById('superhero-section');
console.log(superheroSectionElement.innerHTML);
console.log(superheroSectionElement.textContent);

let siteWrapper = document.getElementById('wrapper');
siteWrapper.style.backgroundColor = 'lightgreen';

function addSuperhero(){
    let superheroNameInputElement = document.getElementById('superhero-name');
    let superheroName = superheroNameInputElement.value;
    console.log(superheroNameInputElement.value);

    superheroNameInputElement.value = '';

    let superHeroesList = document.getElementById('superhero-list');
    superHeroesList.innerHTML += `<li>${superheroName}</li>`;
}

let goodSuperheroesLiElements = document.getElementsByClassName('good');       
goodSuperheroesLiElements[0].textContent += ' The Strongest';
console.log(goodSuperheroesLiElements);
let liElements = document.getElementsByTagName('li');
liElements[1].textContent += ' The Dreamer';
console.log(liElements);


let firstLiElement = document.querySelector('li');
firstLiElement.textContent += ' Avenger';
console.log(firstLiElement);
let queryLiElements = document.querySelectorAll('li');
queryLiElements[2].textContent += " The Evil"
console.log(queryLiElements);
queryLiElements = document.querySelectorAll('#superhero-list .good');
for (let index = 0; index < goodSuperheroesLiElements.length; index++) {
    goodSuperheroesLiElements[index].textContent += ' ***'

    
}
for (let index = 0; index < queryLiElements.length; index++) {
    queryLiElements[index].textContent += ' (MCU)'

    
}
console.log(queryLiElements);

let superheroes = Array.from(queryLiElements);
let superheroes2 = [... queryLiElements];
console.log(superheroes2);
console.log(Array.isArray(superheroes));

let bodyElement = siteWrapper.parentElement;
bodyElement.style.backgroundColor = 'lightGreen';

let heroes = document.getElementById('superhero-list');
let children = heroes.children;     
for (const kid of children) {
    console.log(kid.textContent);           
}

function showHideHeroes(){
    let buttonHideShowHeroesElement = document.getElementById('show-hide-button');

    if(heroes.style.display == 'none'){
    heroes.style.display = 'block';
    buttonHideShowHeroesElement.textContent = 'Hide';
    }
    else{
        heroes.style.display = 'none';
        buttonHideShowHeroesElement.textContent = 'Show';
    }
}

let evenHeroes = document.querySelectorAll('#superhero-section li:nth-of-type(2n+1)');
for (const item of evenHeroes) {
    item.style.backgroundColor = 'lightGray';
}