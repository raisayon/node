const express = require("express");
const Router = express.Router();
const mysqlConnection = require("./connection"); 

Router.get("/", (req,res)=>{
    mysqlConnection.query("Select * from weather", (err , rows, fields)=>{
    if(!err)
{
    res.send(rows);
}
 else{
    console.log(err)
}
    }
    
});

module.exports = Router;
