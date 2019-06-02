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
///////////////////// CRUD Routes ///////////////////
*/

// RETRIEVE ALL ITEMS
 app.get('/items', ( req, res)=>{
     dbConn.query('SELECT * FROM items',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
     })
 })

// RETRIEVE A SINGLE ITEM
 app.get('/items/:id', ( req, res)=>{
    dbConn.query('SELECT * FROM items WHERE id = ?',[req.params.id],(err, rows, fields)=>{
       if(!err)
       res.send(rows);
       else
       console.log(err);
    })
})

// ADD ITEM
app.post('/item', ( req,res) => {
    dbConn.query('INSERT INTO items SET ?', req.body, (error, result) => {
        if (error) throw error;
 
        res.status(201).send('Item successfully added!');
    });
});

// UPDATE AN ITEM
app.put('/item/:id', (req, res) => {
    const id = req.params.id;
 
    dbConn.query('UPDATE items SET  ? WHERE id = ?', [req.body, id], (error, result) => {
        if (error) throw error;
 
        res.send('Item updated successfully.');
    });
});
