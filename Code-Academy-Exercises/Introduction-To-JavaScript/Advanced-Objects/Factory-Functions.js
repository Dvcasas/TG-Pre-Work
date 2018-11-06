const robotFactory = (model, mobile) => {
  return {
    model : model,
		mobile: mobile,
		beep () {
      console.log('Beep Boop');
    }
	};
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();

/* The factory function (constructor) is used to create a template for an
object that can be instantiated by passing the values to be stored in the new
object. In this example, you create a factory function that defines the properties
of a robot. To create a robot, you simply pass the values of the robot into
the method. */
