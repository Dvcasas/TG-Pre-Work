console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');

/* Javascript is an asynchronous language meaning it uses an event loop to
determine when function calls are made. This uses a stack that is processed in
order. Here we used a timeout function to delay the second line of code so the
preceding line of code will run before the 3rd. */
