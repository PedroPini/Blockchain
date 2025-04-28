// blockchain data structures in index.js

let menuArray = ['Bread', 'Cheese', 'Chips', 'Chicken', 'Burger', 'Ice Cream'];

// Let's create an array songs for our playlist
let playlist = ['Bohemian Rhapsody', ' Billie Jean', 'imagine'];

let userObject = {
    name: 'Don',
    age: 99,
    email: 'don@equinimcollege.com',
    favourite_foods: ['Burgers', 'Hot dogs']
};

// Let's create a burgerObject

let customerBurger = {
    name: "Mega Burger",
    patties: 10,
    cheese: 5,
    vegetables: 0,
    sauce: "ketchup"
  }
  
  let customerBurger2 = {
    name: "Don's Burger",
    sauces: ['ketchup', 'bbq', 'mayo']
  }

let trainerSet = new Set();
trainerSet.add('Don');
trainerSet.add('Nidup');
trainerSet.add('Jonathan');
trainerSet.add('Don');
console.log(trainerSet);

// Let's create a set of users

let translations = new Map();
translations.set('hello', 'bonjour');
translations.set('goodbye', 'au revoir');
console.log(translations.get('hello'));

// Let's create a map of capital cities
let capitalCities = new Map();
capitalCities.set('Italy', 'Rome');
capitalCities.set('Japan', 'Tokyo');
console.log(capitalCities.get('Japan'));


//Difference

// Map – Think of it like a dictionary
// Stores key-value pairs


// 🎯 Set – Think of it like a unique values list
// Stores only values, not key-value pairs

