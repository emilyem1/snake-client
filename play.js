const connect = require('../snake-client/client');
const setupInput = require('../snake-client/input');

// function that connects keyboard inputs to server
const dataPlusKeyboard = (connect) => {
  setupInput(connect);
};

console.log("Connecting ...");
dataPlusKeyboard(connect());

