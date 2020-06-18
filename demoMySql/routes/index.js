var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//vamos a pasar la información a la vista para ello vamos a crear una ruta que ejecuta la consulta del modelo películas
router.get("/listado", (req, res, next) => {
  filmModel.fetchAll((error, films) => {
    if (error) return res.status(500).json(error);
    res.render("film-list", {
      title: "Listado de peliculas",
      layout: "layout.hbs",
      films,
    });
  });
});


//creamos una nueva ruta para ejecutar la inserción
router.get("/insertar", (req, res, next) => {
  const FILM = {
    title: "Es una prueba2",
    language_id: 1,
  };
  
  filmModel.insert(FILM, (error, insertID) => {
    if (insertID) {
      return res.status(200).send("Añadido pelicula  -> " + insertID);
    }
    res.status(500).json("Error guardando película: " + error);
  });
});

module.exports = router;
