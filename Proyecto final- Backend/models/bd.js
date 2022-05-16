var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    port: 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME
});

pool.query = util.promisify(pool.query);
module.exports = pool;
