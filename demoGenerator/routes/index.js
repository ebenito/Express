var express = require("express")
var router = express.Router()

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" })
})

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Login GeeksHub" })
})

router.get("/prueba", function (req, res, next) {
  res.render("prueba.hbs", {
    usuarios: [
      { id: 1, name: "xavi" },
      { id: 2, name: "pepe" },
      { id: 3, name: "jesús" },
    ],
    administrador: {
      nombre: "Xavi",
      apellidos: "Rodriguez",
    },
    appName: "Prueba",
    layout: "prueba",
  })
})

module.exports = router
