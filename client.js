const net = require("net");
const { IP, PORT } = require("./constants");

// establish ip and port
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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