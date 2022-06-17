const {connect} = require('./client');
const {setupInput} = require('./input');


console.log("Connected ...");

const connection = connect();

setupInput(connection);