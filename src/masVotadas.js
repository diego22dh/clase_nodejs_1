const movies = require("../data/movies.json");

function masVotadas(req, res) {
  res.write( "Título: Mas Votadas. \n\n");
  let totalDePeliculas = movies.length;
  res.write(`Total  de películas : ${totalDePeliculas}`);
  let votedMovies = movies.filter((elemA) => {
    if (elemA.vote_average >= 7) {
      return elemA.vote_average;
    }
  });
  res.write(`\n\n Rating Promedio`);
  votedMovies.forEach((elem) => {
    res.write ( `\n\n Titulo - ${elem.title}`);
    res.write ( `\n\n Ranking - ${elem.vote_average}`);
    res.write ( `\n\n Resenia - ${elem.overview}`);
  });

  res.end();
};

module.exports = {masVotadas};