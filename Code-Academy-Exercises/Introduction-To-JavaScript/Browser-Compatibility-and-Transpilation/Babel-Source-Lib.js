/*
{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "Use Babel to transpile JavaScript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src -d lib"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}

In this example, I added the build script that will transpile the code in the
src folder into the lib folder. Simply takes the source code, tranpiling it, and
placing the new code in the library. 
*/
