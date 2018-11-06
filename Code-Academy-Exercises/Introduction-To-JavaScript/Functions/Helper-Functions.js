function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
 return monitorCount(rows, columns)  * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

/* Helper functions allow the developer to return the value of a function
from within another function. This helps to make code more concise and legible.*/
