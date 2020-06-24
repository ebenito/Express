let db = require('../db.js');

MovieModel = {};

MovieModel.findAll = () => db;

MovieModel.getPage = (nPage) => {
    //Paginación de los resultados en bloques de 10 items
    const posiIni = (nPage -1) * 10;    
    //console.log(nPage, posiIni);
    let page = db.slice(posiIni, posiIni + 10); //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/slice

    return page;
}

MovieModel.findBy = (id) => db.find(movie => movie.id == id);

MovieModel.insert = (NewMovie) => {
    //console.log(NewMovie);
    db.push(NewMovie);
    return NewMovie;
}

MovieModel.update = (NewMovie) => {
    let updMovie = db.find(movie => movie.id == NewMovie.id);
    
    if (NewMovie.title != '') { updMovie.title = NewMovie.title; }
    if (NewMovie.year != '' && typeof NewMovie.year !== "undefined") { updMovie.year = parseInt(NewMovie.year); }
    if (NewMovie.description != '' && typeof NewMovie.description !== "undefined") { updMovie.description = NewMovie.description; }
    if (NewMovie.duration != '' && typeof NewMovie.duration !== "undefined") { updMovie.duration = parseInt(NewMovie.duration); }
    if (NewMovie.contentRate != '' && typeof NewMovie.contentRate !== "undefined") { updMovie.contentRate = parseInt(NewMovie.contentRate); }
    if (NewMovie.genre != '' && typeof NewMovie.genre !== "undefined") { updMovie.genre = NewMovie.genre; }

    //console.log(NewMovie, updMovie);
    let movies = db.filter(movie => movie.id != NewMovie.id); 
    movies.push(updMovie);
    db = movies;
    return updMovie;
}

MovieModel.delete = (id) => {
    let movies = db.filter(movie => movie.id != id);
    db = movies;
    return 'Borrada la película ID: ' + id;
}

module.exports = MovieModel;