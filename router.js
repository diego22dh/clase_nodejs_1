const fs = require("fs");
const funciones = require("./customFunctions.js");
const funcionesPaginas = require ("./src/index")


const route = (req,res)=>{
// Route System
     switch (req.url) {
       // Home
       case "/":
         funcionesPaginas.home.homePage(req, res);
         break;
       // En cartelera
       case "/en-cartelera":
         funcionesPaginas.cartelera.enCartelera(req, res);
         break;
       case "/mas-votadas":
         funcionesPaginas.masVotadas.masVotadas(req, res);
         break;
       case "/sucursales":
         funcionesPaginas.sucursales.sucursales(req, res);
         break;
       case "/contacto":
         funcionesPaginas.contacto.contacto(req, res);
         break;
       case "/preguntas-frecuentes":
         funcionesPaginas.faqs.faqs(req, res);
         break;
       default:
         res.end("404 not found");
     }};

     module.exports = {route};

    