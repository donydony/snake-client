const net = require("net");

// establishes a connection with the game server
const connect = function (ip, port) {
  const conn = net.createConnection({
    host: ip, // IP address here,
    port: port // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: DSZ");
  });

  conn.on('data', (data) => {
    console.log(data.toString());
  });

  return conn;
};

module.exports = {
  connect
};