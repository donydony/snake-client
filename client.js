const { connect } = require("./play.js");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();