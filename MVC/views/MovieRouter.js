const express = require('express');
const router = express.Router();

const MovieController = require('../controllers/MovieController');

//Devuelve toda la BD de peliculas
router.get('/', MovieController.getAll);

//RETO: Consulta listado por paginacion
router.get('/page/:nPage', MovieController.getPage);

//Consulta item por ID
router.get('/:id', MovieController.getById);

//Añadir items
router.post('/', MovieController.create);

//Modificar item
router.put('/:id', MovieController.update);

//Borrar un item
router.delete('/:id', MovieController.delete);

module.exports = router;