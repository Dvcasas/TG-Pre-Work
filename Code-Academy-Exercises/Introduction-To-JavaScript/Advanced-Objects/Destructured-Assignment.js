const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;
functionality.beep();

/* The deconstructed assignment method is a way to reference a property using
a shorter concise syntax. In this case we create a local variable with the same
name as the object property and use the curly braces to indicate it is a
property of an object and set the value of the object. In this case, functionality
is the property reference of the robot object. */ 
