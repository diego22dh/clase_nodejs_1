
const movies = require("../data/movies.json");
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


module.exports = {homePage};