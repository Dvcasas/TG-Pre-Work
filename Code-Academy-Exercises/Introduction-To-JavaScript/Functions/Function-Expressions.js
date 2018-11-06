const plantNeedsWater = function(day) {
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};

plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));

/* Function expressions allow the developer to place anonymous functions inline
with the variable declaration to instatiate a value that must meet a condition.
Function expressions cannot be hoisted and must be defined before they are
called. */
