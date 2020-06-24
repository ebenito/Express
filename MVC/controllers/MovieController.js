const MovieModel = require('../models/MovieModel');
const MovieController = {};

MovieController.getAll = (req, res, next) => { 
    res.json(MovieModel.findAll());
    next(getFecha() + ' Movie - getAll');
}

MovieController.getPage = (req, res, next) => {
    const { nPage } = req.params;      
    res.json(MovieModel.getPage(nPage)); 
    next(getFecha() + ' Movie - getPage: ' + nPage);
}

MovieController.getById = (req, res, next) => {
    const { id } = req.params;  //Alternativa: const id = req.params.id;  
    res.json(MovieModel.findBy(id)); 
    next(getFecha() + ' Movie - getById: ' + id);
}

MovieController.create = (req, res, next) => {
    const { body } = req;   //en la petición post enviar en body un json, ej: {"id":"101","title":"Cantando bajo la lluvia","year":1955,"description":"Actores inventan el cine músical por necesidad.","duration":130,"contentRate":12,"genre":"Drama"}
    res.json(MovieModel.insert({...body}));
    next(getFecha() + ' Movie - create: ' + body.title);
}

MovieController.update = (req, res, next) => {    
    const id = parseInt(req.params.id); 
    const { body } = req;  //en la petición put enviar en body un json, ej: {"title":"Cantando bajo la lluvia", "year": 1952}; el ID va en la ruta URL
    
    res.json(MovieModel.update({id, ...body}));
    next(getFecha() + ' Movie - update - ID: ' + id);
}

MovieController.delete = (req, res, next) => {
    const { id } = req.params;      
    res.json(MovieModel.delete(id));
    next(getFecha() + ' Movie - delete - ID: ' + id);
}

function getFecha()
{
    const fecha = new Date();
    // const options = { year: 'numeric', month: 'long', day: 'numeric'};
    // return fecha.toLocaleDateString("es-ES", options);
    return fecha;
}

module.exports = MovieController;