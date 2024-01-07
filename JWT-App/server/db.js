//THIS FILE CONNECTS SERVER WITH DATABASE

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Hrishilemon99",
  host: "localhost",
  port: 5432,
  database: "jwttutorial",
});

module.exports = pool;
