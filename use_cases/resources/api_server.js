const express = require('express');
const mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
  host     : 'db',
  user     : 'root',
  password : process.env.MYSQL_ROOT_PASSWORD,
  database : process.env.MYSQL_DATABASE,
});

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send("hogehoge!");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
