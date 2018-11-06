import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

/* Here I used the import keyword to retrieve the module and looped through the
data to output to display the fuel capacity of each object. */
