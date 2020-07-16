//Importing the libraries
//const CSVToJSON = require("csvtojson");
//const JSONToCSV = require("json2csv");
const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

//Creating a connection
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "weatherapidb"
});

mysqlConnection.connect((err) => {
    if (!err)
       console.log('DB connection success');
    else
       console.log('Db connection failed \n Error : ' + JSON.stringify(err,undefined,2));
});
//starting a server

app.listen(3000,()=>console.log('express server running on port 3000'));

//query  
app.get('/weathers',(req,res)=>{
    mysqlConnection.query('SELECT * From weather',(err,rows,fields)=>{
        if(!err)
        console.log(rows);
        else
        console.log(err);
        
    })
});

app.get('/weathers/:id',(req,res)=>{
    mysqlConnection.query('SELECT * From weather',(err,rows,fields)=>{
        if(!err)
        console.log(rows);
        else
        console.log(err);

    })
});

