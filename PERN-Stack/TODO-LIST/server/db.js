const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Hrishilemon99",
    host: "localhost",
    database: "pernstack",
    port: 5432
});

module.exports = pool;