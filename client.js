const { connect } = require("./play.js");
const { setupInput } = require("./input");
const { IP, PORT } = require("./constants");

console.log("Connecting ...");

setupInput(connect(IP, PORT));