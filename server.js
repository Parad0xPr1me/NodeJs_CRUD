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

// default route
 app.get('/', function ( req, res) {
     return res.send({ message: 'Hello multiverse!' })
 });

// connection configurations
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventory'
});
// connect to database
dbConn.connect((err)=>{
    if(!err)
    console.log("Database connection successful!")
    else 
    console.log("Database connection failed! \n Error:" + JSON.stringify(err,underfined,2));
})



/*
/ CRUD Routes
*/

// Retrieve all items
 app.get('/items',( req, res)=>{
     dbConn.query('SELECT * FROM items',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
     })
 })

// Retrieve a single item
 app.get('/items/:id',( req, res)=>{
    dbConn.query('SELECT * FROM items WHERE id = ?',[req.params.id],(err, rows, fields)=>{
       if(!err)
       res.send(rows);
       else
       console.log(err);
    })
})