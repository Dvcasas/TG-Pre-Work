const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};

console.log(robot.energyLevel);

/* Getters are one of the most common methods used to retrieve data from an
object. By creating a getter, it prevents direct access to the value stored in
the object and the returned data can be manipulated to output in a certain way. */
