const movies = require("../data/movies.json");
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
module.exports = {enCartelera};