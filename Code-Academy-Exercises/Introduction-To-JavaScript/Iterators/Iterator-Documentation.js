const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});

// Make sure to uncomment the code below and fix the incorrect code before running it
console.log(interestingWords.every((word) => {return word.length > 5}));

/* The MDN documentation contains information regarding array methods including
definition, syntax and examples. Using it as a reference is wise when coding.
This example, I used the MDN documentation to identify errors in the coding
sample and make corrections. */
