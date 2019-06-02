# NodeJs_simpleCRUD

RESTful API Basic CRUD using Nodejs, Express, and mySQL!

## Getting Started

To run the server, open terminal and cd to the directory then:

```
cd NodeJS_RestAPI_simpleCRUD

npm install 

node server.js

```

# Open your browser
 Type localhost:3001/items


## API CALLS / Test with Postman

Use [Postman] to test APIs

To retrieve all item, use GET method:
```
localhost:3001/items
```
To retrieve a single item, use GET method and input the id of the item:
```
localhost:3001/item/1
```
To create an item, use POST method:
```
localhost:3001/item
```
To update an item, use PUT method and input the id of the item:
```
localhost:3001/item/1
```
To delete an item, use DELETE method and input the id of the item:
```
localhost:3001/item/1
```
# Example raw body in Create & Update of an item:
```
{
	"id":1,
	"name":"toy",
	"qty":4,
	"amount":19
}
```

## Database Config in server.js file
```
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventory'
```
Create a database named 'inventory' with a table 'items' which consist of columns(id,name,qty,amount). Or just import the 'inventory.sql' that is included in the folder.

## Built With

* [Node.js](https://nodejs.org/en/) 
* [Express](https://expressjs.com/) - Node.js Web Application Framework
* [phpMyAdmin](https://www.phpmyadmin.net/) - Used to create MySQL database
* [Postman](https://www.getpostman.com/) - Used to test API endpoints



## Versioning

1.0.0

## Authors

* **James Cornes** - *Initial work* 


## Acknowledgments

* Callicoder & EnvatoTuts for an overview in building a RESTful CRUD API!
* Let's Build That App & Programming with Mosh - NodeJS Youtube series
* My dog, Clyde, for making me smile everytime I'm down :) 
