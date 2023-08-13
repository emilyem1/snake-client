const net = require("net");
const { setInterval } = require("timers/promises");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
    up: "Move: up",
    down: "Move: down",
    left: "Move: left",
    right: "Move: right"
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // set a message for connection 
  conn.on('connect', () => {
    console.log('Connected to the server! 🐍');
    conn.write("Name: EEM");
  });
  // hanlde incoming data
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  // set a message for disconnection 
  conn.on('end', () => {
    console.log('Disconnected from server 👋');
  }); 


  return conn;
};

module.exports = connect;