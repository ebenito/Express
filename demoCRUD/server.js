const express = require('express');
const bodyParser =  require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

let movies = [
    {id: 1, titulo: 'Soy Leyenda'},
    {id: 2, titulo: 'Rey León'},
    {id: 3, titulo: 'Regreso al futuro'},
    {id: 4, titulo: 'La historia interminable'},
    {id: 5, titulo: 'Manolito gafotas'},
    {id: 6, titulo: 'Star Wars'},
    {id: 7, titulo: 'Star Trek'},
    {id: 8, titulo: 'Toy Story'}
  ];

app.get("/", (req, res) => res.send("EXPRESS"));

app.get('/movies', (req, res) => {
    res.json(movies);
})

//Consulta item por ID
app.get('/movies/:id', (req, res) => {
    const { id } = req.params;  //Alternativa: const id = req.params.id;
    let movie = movies.find(movie => movie.id == id);
    res.json(movie);
})

//Añadir items
app.post('/movies', (req, res) => {
    const { id, titulo } = req.body;   //en la petición post enviar en body un json, ej: {"id":"9","titulo":"Cantando bajo la lluvia"}
    const movie = { id, titulo }
    movies.push(movie);
    res.json(movie);
})

//Modificar item
app.put('/movies/:id', (req, res) => {    
    const id = parseInt(req.params.id); 
    const { titulo } = req.body;  //en la petición put enviar en body un json, ej: {"titulo":"Cantando bajo la lluvia"}; el ID va en la ruta URL
    let movieList = movies.filter(movie => movie.id != id);
    let movie = { id, titulo };
    
    movieList.push(movie);
    movies = movieList;
    res.json(movie);
})

//Borrar un item
app.delete('/movies/:id', (req, res) => {
    const { id } = req.params;  
    let movieList = movies.filter(movie => movie.id != id);
    movies = movieList;
    res.json('OK');
})


app.listen(PORT, () => console.log("El servidor esta corriendo"));