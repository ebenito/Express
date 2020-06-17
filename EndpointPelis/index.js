// Vamos a crear un endpoint que cumpla el siguiente servicio:
// ● Ruta “/movies”
//    - Te devuelve un JSON todo el listado de películas.
// ● Ruta “/movie/:id”
//    - Te devuelve la película con el mismo
// id del parámetro.
// ● Ruta “movie?query=””
//    - Devuelve todas las coincidencias por titulo


const express = require('express');
const app = express();
const PORT = 8080;

const movies = [
  {id: 1, titulo: 'Soy Leyenda'},
  {id: 2, titulo: 'Rey León'},
  {id: 3, titulo: 'Regreso al futuro'},
  {id: 4, titulo: 'La historia interminable'},
  {id: 5, titulo: 'Manolito gafotas'},
  {id: 6, titulo: 'Star Wars'},
  {id: 7, titulo: 'Star Trek'},
  {id: 8, titulo: 'Toy Story'}
];

app.listen(PORT, () => {
    console.log("Servidor levantado en el puerto " + PORT);
})

//Ejemplos GET / RESPONSE
app.get('/', (req, res) => {
    res.send("<h1>KATA: EndPoint de Servicio</h1>");
})

//http://localhost:8080/movies
app.get('/movies', (req, res) => {
  res.json(movies);
})

//Ejemplos GET / REQUEST
//En ruta: http://localhost:8080/movie/3
app.get('/movie/:id', (req, res) => {
  let { id } = req.params;
  let movie  = movies.find(item => item.id === parseInt(id))
  res.json(movie);
})

//Por parámetros en Query
//http://localhost:8080/movie?q=star
app.get('/movie', (req, res) => {
  if (typeof(req.query.q) != "undefined")
  {
    let { q } = req.query;
    let movieList  = movies.filter(item => 
      //{
      item.titulo.toLowerCase().includes(q.toLowerCase()) //;
      //console.log(q, "-->", item.titulo, item.titulo.includes(q));
      // }
    );    
    res.json(movieList);
  }else{
    res.send("<h3>Debe ínicar la pelicula que desea consultar.</h3>");
  }
})
