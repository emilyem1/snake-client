const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // set a message for connection 
  conn.on('connect', () => {
    console.log('Connected to the server! 🐍');
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

console.log("Connecting ...");
connect();
