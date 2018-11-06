let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 9;
delete spaceship['Secret Mission'];

/* You can assign a value to a property using either the bracket notation or the
dot notation and the assignment operator with the value. If the property does
not exist when trying to assign a value, the property will be added. */
