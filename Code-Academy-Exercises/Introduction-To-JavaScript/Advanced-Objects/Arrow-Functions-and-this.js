const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

/* When using arrow functions in methods, the this keyword becomes bound to
the method making itself then blocks the reference to the higher object. */
