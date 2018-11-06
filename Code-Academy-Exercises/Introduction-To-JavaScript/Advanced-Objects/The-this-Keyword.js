const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());

/* The this keyword is used to reference the calling object and gain access to
its properties. In this example, the scope of provideInfo() is more narrow than
the object itself so to reference the object itself, we use the this keyword. */
