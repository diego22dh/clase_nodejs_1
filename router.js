const fs = require("fs");
const funciones = require("./customFunctions.js");
const otrasFunciones = require ("./src/index")


const route = (req,res)=>{
// Route System
     switch (req.url) {
       // Home
       case "/":
         otrasFunciones.home.homePage(req, res);
         break;
       // En cartelera
       case "/en-cartelera":
         otrasFunciones.cartelera.enCartelera(req, res);
         break;
       case "/mas-votadas":
         otrasFunciones.masVotadas.masVotadas(req, res);
         break;
       case "/sucursales":
         otrasFunciones.sucursales.sucursales(req, res);
         break;
       case "/contacto":
         otrasFunciones.contacto.contacto(req, res);
         break;
       case "/preguntas-frecuentes":
         otrasFunciones.faqs.faqs(req, res);
         break;
       default:
         res.end("404 not found");
     }};

     module.exports = {route};

    