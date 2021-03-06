// Crear una API REST con Express con las siguientes características:
// ● Puerto 4201.
// ● Cuando se inicia el servidor, deberá aparecer en consola: ‘La API está levantada en el puerto 4201’.
// ● Ruta “/” con mensaje ‘Bienvenidos a la API REST’.

// Ejemplo basado en: https://expressjs.com/es/starter/hello-world.html

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4201;

app.listen(PORT, () => {
    console.log("Servidor levantado en el puerto " + PORT);
})

app.use(bodyParser.json()); //Para manejar las peticiones POST con un JSON en body

//Ejemplos GET / RESPONSE
app.get('/', (req, res) => {
    res.send(`La API está levantada en el puerto ${PORT}`);
})

//COMENTADO: Esta definición y la de request con parámetros en Query son excluyentes, dejando sin efecto a la segunda que se defina.
// app.get('/secreta', (req, res) => {
//   res.send("<h3>Esta página es secreta.</h3>");
// })

app.get('/darweb', (req, res) =>
 res.redirect('https://darweb.es')
)

//Ejemplos GET / REQUEST
//En ruta: http://localhost:4201/secreta/param
app.get('/secreta/:palabra', (req, res) => {
  res.send(`<pre>La palabra secreta es ${req.params.palabra} </pre>`);
})

//Por parámetros en Query
//http://localhost:4201/secreta?palabra=algo
app.get('/secreta', (req, res) => {
  if (typeof(req.query.palabra) != "undefined")
  {
    res.send(`<pre>La palabra secreta es: ${req.query.palabra} </pre>`);
  }else{
    res.send("<h3>Esta página es secreta.</h3>");
  }
})

// Parámetros Request por el Body
// Vamos a enviar información en el body del método POST. Ejemplo; desde postman enviar el JSON: { "food" : "Pizza"}
app.post('/request/pregunta', (req, res) => {
  res.send('Mi comida favorita es ' + req.body.comida);
  console.log("Dice que su comida favorita es", req.body.comida);
})

// Parámetros por Post y Get a la vez
// El Id nos llega por Get en la URL y los parámetros nos llegan por Post. JSON de ejemplo: {"product" : ["Pizza", "tomate"]}
app.post('/request/order/:id', (req, res) => {
  res.send('Order ID ' + req.params.id + ' Products ' + req.body.product);
 });
 