// Ejemplo basado en: https://expressjs.com/es/starter/hello-world.html

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hola mundo!");
})

app.listen(3000, () => {
  console.log("Servidor inicializado");
})


