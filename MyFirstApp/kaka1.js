// Crear una API REST con Express con las siguientes características:
// ● Puerto 4201.
// ● Cuando se inicia el servidor, deberá aparecer en consola: ‘La API está levantada en el puerto 4201’.
// ● Ruta “/” con mensaje ‘Bienvenidos a la API REST’.

const express = require('express');
const app = express();
const PORT = 4201;

app.get('/', (req, res) => {
    res.send(`La API está levantada en el puerto ${PORT}`);
})

app.listen(PORT, () => {
    console.log("Bienvenidos a la API REST");
})