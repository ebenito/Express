const express = require('express');
const router = express.Router();

const MovieModel = require('../models/MovieModel');

//Devuelve toda la BD de peliculas
router.get('/', (req, res) => {    
    res.json(MovieModel.findAll());
})


//Consulta item por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;  //Alternativa: const id = req.params.id;  
    res.json(MovieModel.findBy(id));    
})

//Añadir items
router.post('/', (req, res) => {
    const { body } = req;   //en la petición post enviar en body un json, ej: {"id":"101","title":"Cantando bajo la lluvia","year":1955,"description":"Actores inventan el cine músical por necesidad.","duration":130,"contentRate":12,"genre":"Drama"}
    res.json(MovieModel.insert({body}));
})

//Modificar item
router.put('/:id', (req, res) => {    
    const id = parseInt(req.params.id); 
    const { body } = req;  //en la petición put enviar en body un json, ej: {"title":"Cantando bajo la lluvia", "year": 1952}; el ID va en la ruta URL
    
    res.json(MovieModel.update({id, ...body}));
})


//Borrar un item
router.delete('/:id', (req, res) => {
    const { id } = req.params;      
    res.json(MovieModel.delete(id));
})


module.exports = router;