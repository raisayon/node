const mysql = require('mysql');

//Creating a connection
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "weatherapidb"
});

mysqlConnection.connect((err) => {
    if (!err)
       {
       console.log('DB connection success');
       }
    else
        {
       console.log('Db connection failed \n Error : ' + 
JSON.stringify(err,undefined,2));
}

});

module.exports = mysqlConnection;
