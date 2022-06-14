const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write('Name: RCB');
  })

  //show message sent by server
  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = {connect};