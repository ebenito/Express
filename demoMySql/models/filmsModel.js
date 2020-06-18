let conn = require("../connections/mysqlconnection");
let Films = {};

Films.fetchAll = (cb) => {
  if (!conn) return cb("No se ha podido crear la conexión");

  const SQL = "SELECT * FROM film LIMIT 5;";
  conn.query(SQL, (error, rows) => {
    if (error) return cb(error);
    else return cb(null, rows);
  });
};

module.exports = Films;

// crear los métodos para insertar nuevos registros
Films.insert = (film, cb) => {
  if (!conn) return cb("No se ha podido crear la conexión");
  conn.query("INSERT INTO film SET ?", [film], (error, result) => {
    if (error) return cb(error);
    return cb(null, result.insertId);
  });
};
