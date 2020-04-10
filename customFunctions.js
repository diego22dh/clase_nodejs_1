const fs = require ("fs");



const movies = require("./data/movies.json");
const faqs = require("./data/faqs.json");
const theaters = require("./data/theatres.json");
//---------------------------------------------Funciones----------------------------------------------
//---------------------------------------------Home Page----------------------------------------------
function homePage(req,res) {
  let response =
    "Título: Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn. \n\n";
  let totalDePeliculas = movies.length;
  response += `Total  de películas en cartelera: ${totalDePeliculas}`;
  let sortedMovies = movies.sort((elemA, elemB) => {
    return elemA.title.localeCompare(elemB.title);
  });
  sortedMovies.forEach((elem) => {
    response += `\n - ${elem.title}`;
  });

  response += `\n\nRecordá que podés visitar las secciones:
    - En Cartelera (/en-cartelera)
    - Más Votadas (/mas-votadas)
    - Sucursales (/sucursales)
    - Contacto (/contacto)
    - Preguntas Frecuentes (/preguntas-frecuentes)`;

  res.end(response);
};

//-------------------------------------En Cartelera-------------------------------------------------------
function enCartelera(req, res) {
  let response = "Título: En Cartelera. \n\n";
  let totalDePeliculas = movies.length;
  response += `Total  de películas : ${totalDePeliculas}`;
  let titlesMovies = movies.filter((elemA) => {
    return elemA.title;
  });
  response += `\n\n Listado de peliculas`;
  titlesMovies.forEach((elem) => {
    response += `\n\n Titulo - ${elem.title}`;
    response += `\n\n Resenia - ${elem.overview}`;
  });

  res.end(response);
};

//-------------------------------------Mas Votadas----------------------------------------------------

function masVotadas(req, res) {
  let response = "Título: Mas Votadas. \n\n";
  let totalDePeliculas = movies.length;
  response += `Total  de películas : ${totalDePeliculas}`;
  let votedMovies = movies.filter((elemA) => {
    if (elemA.vote_average >= 7) {
      return elemA.vote_average;
    }
  });
  response += `\n\n Rating Promedio`;
  votedMovies.forEach((elem) => {
    response += `\n\n Titulo - ${elem.title}`;
    response += `\n\n Ranking - ${elem.vote_average}`;
    response += `\n\n Resenia - ${elem.overview}`;
  });

  res.end(response);
};

//----------------------------------Sucursales-----------------------------------------------------------------

function sucursales(req, res) {
  let response = "Título: Nuestras Salas. \n\n";
  let totalDeSalas = theaters.length;
  response += `Total  de Salas : ${totalDeSalas}`;

  let listedrooms = theaters.filter((elemA) => {
    return elemA.name;
  });

  response += `\n\n Listado de Salas`;
  listedrooms.forEach((elem) => {
    response += `\n\n Nombre - ${elem.name}`;
    response += `\n\n Direccion - ${elem.address}`;
    response += `\n\n Desripcion - ${elem.description}`;
  });

  res.end(response);
};

//-------------------------------Contacto--------------------------------------------------------------
function contacto(req, res) {
  let response = "Título: Contactanos. \n\n";

  response += `\n\n Contenido: ¿Tenés algo para contarnos? Nos encanta escuchar a nuestros
  clientes.Si deseas contactarnos podés escribirnos al siguiente email:
  dhmovies@digitalhouse.com o en las redes sociales. Envianos tu consulta,
  sugerencia o reclamo y será respondido a la brevedad posible. Recordá que
  también podes consultar la sección de Preguntas Frecuentes para obtener
  respuestas inmediatas a los problemas más comunes`;

  res.end(response);
};

//---------------------------------------------- Preguntas Frecuente--------------------------

function faq(req, res) {
  let response = "Título: Preguntas Frecuentes. \n\n";
  let totalDeFaqs = faqs.length;
  response += `Total  de Preguntas : ${totalDeFaqs}`;

  let listedfaqs = faqs.filter((elemA) => {
    return elemA.faq_title;
  });

  response += `\n\n Listado de Preguntas`;
  listedfaqs.forEach((elem) => {
    response += `\n\n Pregunta - ${elem.faq_title}`;
    response += `\n\n Respuesta - ${elem.faq_answer}`;
  });

  res.end(response);
};

module.exports = {homePage, enCartelera, masVotadas, sucursales, contacto, faq};