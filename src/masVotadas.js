const movies = require("../data/movies.json");

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

module.exports = {masVotadas};