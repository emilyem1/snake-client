const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') { 
    console.log("Disconnected from server 🙅")
    process.exit();
  }
};

setupInput();

module.exports = setupInput;
/* only need to export setupInput because handleUserInput is only used in this file */