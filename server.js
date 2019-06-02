const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const mysql = require('mysql');

app.use(bodyparser.json());

// set port
app.listen(3001, function () {
    console.log('Node server is running on port 3001');
});
module.exports = app;

