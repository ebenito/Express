const express = require('express');
const bodyParser =  require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("EXPRESS"));

app.listen(PORT, () => console.log("El servidor esta corriendo"));