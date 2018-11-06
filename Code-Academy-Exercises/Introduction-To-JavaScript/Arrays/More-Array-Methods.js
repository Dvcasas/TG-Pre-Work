const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

/* The first to examples, pop and push, both change the array in some way.
There are other methods to used to make working with arrays easier and avoid
destroying the initial array. */
