const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
robot.recharge();

/* One format used to denote a property that should not be alters is to start
its name with an underscore. In this example, the _energyLevel can be changed
but the _ is dignaling to the developer that it shouldn't be. */
