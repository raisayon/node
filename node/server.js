//importing libraries
const express = require('express');
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection"); 
const weatherRoutes = require("./routes/weather");

var app = express();
app.use(bodyParser.json());

app.use("/weather", weatherRoutes);

app.listen(8080);
