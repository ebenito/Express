const MovieModel = require('../models/MovieModel');
const MovieController = {};

MovieController.getAll = (req, res) => {    
    res.json(MovieModel.findAll());
}

MovieController.getPage = (req, res) => {
    const { nPage } = req.params;      
    res.json(MovieModel.getPage(nPage)); 
}

MovieController.getById = (req, res) => {
    const { id } = req.params;  //Alternativa: const id = req.params.id;  
    res.json(MovieModel.findBy(id)); 
}

MovieController.create = (req, res) => {
    const { body } = req;   //en la petición post enviar en body un json, ej: {"id":"101","title":"Cantando bajo la lluvia","year":1955,"description":"Actores inventan el cine músical por necesidad.","duration":130,"contentRate":12,"genre":"Drama"}
    res.json(MovieModel.insert({...body}));
}

MovieController.update = (req, res) => {    
    const id = parseInt(req.params.id); 
    const { body } = req;  //en la petición put enviar en body un json, ej: {"title":"Cantando bajo la lluvia", "year": 1952}; el ID va en la ruta URL
    
    res.json(MovieModel.update({id, ...body}));
}

MovieController.delete = (req, res) => {
    const { id } = req.params;      
    res.json(MovieModel.delete(id));
}

module.exports = MovieController;