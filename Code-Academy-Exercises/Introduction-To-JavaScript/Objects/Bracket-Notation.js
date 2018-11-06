let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
let isActive = spaceship['Active Mission'];
console.log(spaceship[propName]);

/* The other way to access a key's value is through bracket notation in where
you pass in the property name in brackets with the property name in quotes like
referencing the position in an array. */
