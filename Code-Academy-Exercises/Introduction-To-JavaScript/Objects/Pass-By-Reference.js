let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
  obj.disabled = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);

/* When an argument is passed by reference, the literal value is not passed
through to the method but the memory location of the variable. That reference
is just pointing to the value you want to manipulate. */
