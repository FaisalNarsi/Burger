// setting up connection

var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost"
  user: "root",
  password: "levelTech9"
  database: "burgers_db"
});


// Makeing connection

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM

module.exports = connection;
