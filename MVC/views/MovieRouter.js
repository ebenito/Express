const express = require('express');
const router = express.Router();

const logger = require('morgan');
const MovieController = require('../controllers/MovieController');


//Devuelve toda la BD de peliculas
router.get('/', MovieController.getAll, logger('log'));

//RETO: Consulta listado por paginacion
router.get('/page/:nPage', MovieController.getPage, logger('log'));

//Consulta item por ID
router.get('/:id', MovieController.getById, logger('log'));

//Añadir items
router.post('/', MovieController.create, logger('log'));

//Modificar item
router.put('/:id', MovieController.update, logger('log'));

//Borrar un item
router.delete('/:id', MovieController.delete, logger('log'));

module.exports = router;