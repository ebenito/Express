const express = require('express');
const bodyParser =  require('body-parser');

const PORT = 3000;
const app = express();
const MovieRouter = require('./views/MovieRouter.js');

app.use(bodyParser.json());

//Rutas
app.get("/", (req, res) => res.send("EXPRESS"));
app.use('/movies', MovieRouter);

app.listen(PORT, () => console.log("El servidor esta corriendo"));
