//airplane
const Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};
 //missionControl
const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());

/* It is also possible to import functions for use from a module. In this case,
I called the displayAirplane() method that was imported useing require().*/
