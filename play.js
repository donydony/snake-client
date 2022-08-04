const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '172.29.203.236', // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: DSZ");
    setInterval(() => {
      conn.write("Move: up");
    }, 500);
  });

  conn.on('data', (data) => {
    console.log(data.toString());
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  connect
};