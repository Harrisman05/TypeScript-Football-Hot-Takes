const mysql = require('mysql2');
require('dotenv').config(); // .env used to hide database and password

const pool = mysql.createPool({
    user: "root",
    host: "containers-us-west-94.railway.app",
    database: "railway",
    password: "330p5GCo4O4XnB8u0DBD",
    connectionLimit: "process.env.CONNECTION_LIMIT",
    port: "7692"
});

let select_all_query = "SELECT * from football_opinion_noteboard;";
let insert_statement = "INSERT INTO `football_opinion_noteboard` (`PlayerName`, `Opinion`, `Contributor`) VALUES ('Neymar', 'Best dribbler in the world', 'Harley Harris')";

pool.execute(insert_statement, function(error, result) {
    if (error) throw error;
    console.log(result);
});

pool.execute(select_all_query, function(error, result) {
    if (error) throw error;
    console.log(result);
});
