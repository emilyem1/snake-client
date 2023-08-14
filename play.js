const connect = require('../snake-client/client');
const setupInput = require('../snake-client/input')

const dataPlusKeyboard = (connect) => {
  setupInput(connect);
}

console.log("Connecting ...");
dataPlusKeyboard(connect());

