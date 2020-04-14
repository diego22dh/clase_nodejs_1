const movies = require("../data/movies.json");
//-------------------------------------En Cartelera-------------------------------------------------------
function enCartelera(req, res) {
  res.write( "Título: En Cartelera. \n\n");
  let totalDePeliculas = movies.length;
  res.write(`Total  de películas : ${totalDePeliculas}`);
  let titlesMovies = movies.filter((elemA) => {
    return elemA.title;
  });
  res.write( `\n\n Listado de peliculas`);
  titlesMovies.forEach((elem) => {
    res.write(`\n\n Titulo - ${elem.title}`);
    res.write (`\n\n Resenia - ${elem.overview}`);
  });

  res.end();
};
module.exports = {enCartelera};