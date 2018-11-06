let Airplane = {};

Airplane.availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800
 },
 {name: 'SkyJet',
  fuelCapacity: 500
 }
];

export default Airplane;

/* There is a shorter syntx which allows me to export the object using only the
name. In this example, I created a plane with a property of availableAirplanes
with an array of objects containing their own properties and values.*/
