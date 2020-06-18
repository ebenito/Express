//crear nuestra instancia para la conexión a la base de datos
const MYSQL = require("mysql");
const CONN = MYSQL.createConnection({
  host: "localhost",
  user: "root",
  password: "44865710",
  database: "sakila",
});
module.exports = CONN;