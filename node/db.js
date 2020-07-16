//Importing library
var mysql = require('mysql');

//creating connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
//  con.query("CREATE DATABASE weatherapidb", function (err, result) {
  //  if (err) throw err;
    //console.log("Database created");
  //});
});

module.exports.mysql = mysql;
module.exports.con = con;
