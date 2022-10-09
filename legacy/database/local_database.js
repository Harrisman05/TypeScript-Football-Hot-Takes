const mysql = require('mysql2');

const pool = mysql.createPool({
    user: "uzvdtxpovrtudh0m",
    host: "bajh6jtshgg79jht11gt-mysql.services.clever-cloud.com",
    database: "bajh6jtshgg79jht11gt",
    password: "hwZwvFJxDgjW5lhcqmz7",
    connectionLimit: "10",
    port: "3306"
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
