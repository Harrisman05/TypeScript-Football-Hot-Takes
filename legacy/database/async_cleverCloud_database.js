async function connectDB() {

    const mysql = require('mysql2');

    const pool = mysql.createPool({
        user: "uzvdtxpovrtudh0m",
        host: "bajh6jtshgg79jht11gt-mysql.services.clever-cloud.com",
        database: "bajh6jtshgg79jht11gt",
        password: "hwZwvFJxDgjW5lhcqmz7",
        connectionLimit: 10,
        port: "3306"
    });

    const promisePool = pool.promise();
    console.log("hello");
    
    console.log(promisePool);

    
    let select_all_query = "SELECT * from football_opinion_noteboard;";
    let insert_statement = "INSERT INTO `football_opinion_noteboard` (`player_name`, `opinion`, `contributor`) VALUES ('Neymar', 'Best dribbler in the world', 'Harley Harris')";
    let delete_statement = "DELETE FROM `football_opinion_noteboard` WHERE ..."

    const insertation = await promisePool.query(insert_statement);
    // const deletion = await promisePool.query(delete_statement);

    const selection = await promisePool.query(select_all_query);
    console.log(selection[0]);

    return selection[0];

}

connectDB();


async function main(promisePool) {



}

