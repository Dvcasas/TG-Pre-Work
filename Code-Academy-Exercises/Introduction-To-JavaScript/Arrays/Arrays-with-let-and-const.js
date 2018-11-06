let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
utensils[3] = 'Spoon';
console.log(utensils);
// utensils = ['Spork'];

/* Arrays declared with a const keyword cannot be reassigned but the values
within the array can. An array declared with let can be reassigned. In my
experience, often when sorting arrays, the array is reassigned after
sorting and this cannot be done in the same fashion with a constant array. */
