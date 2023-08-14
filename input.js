let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// key inputs
const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("End of session 🙅");
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === '1') {
    connection.write("Say: I hunger for blocks");
  }
  if (key === '2') {
    connection.write("Say: Mmmm pixels");
  }
};

setupInput();

module.exports = setupInput;
/* only need to export setupInput because handleUserInput is only used in this file */