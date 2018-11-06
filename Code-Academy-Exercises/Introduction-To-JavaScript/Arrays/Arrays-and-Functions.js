const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

const removeElement = newArr => {
  newArr.pop()
}

removeElement(concept);
console.log(concept);

/* It is possible to create functions to manipulate arrays. In this example
a function is created to add 'lily' to an array by calling the function and
passing in the array as an argument. */
