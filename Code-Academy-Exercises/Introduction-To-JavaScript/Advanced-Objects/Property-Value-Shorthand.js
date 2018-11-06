function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

/* The value shorthand is a truncated from of property value assignment that
assumes the value has the same name as the argument and assigns itself to the
value with the same name. This is a timesaver should you have loads of proerties
to manually write out. */
