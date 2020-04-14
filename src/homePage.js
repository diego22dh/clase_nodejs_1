
const movies = require("../data/movies.json");
//---------------------------------------------Home Page----------------------------------------------
function homePage(req,res) {
  res.write (
    "Título: Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn. \n\n");
  let totalDePeliculas = movies.length;
  res.write( `Total  de películas en cartelera: ${totalDePeliculas}`);
  let sortedMovies = movies.sort((elemA, elemB) => {
    return elemA.title.localeCompare(elemB.title);
  });
  sortedMovies.forEach((elem) => {
    res.write( `\n - ${elem.title}`);
  });

  res.write(`\n\nRecordá que podés visitar las secciones:
    - En Cartelera (/en-cartelera)
    - Más Votadas (/mas-votadas)
    - Sucursales (/sucursales)
    - Contacto (/contacto)
    - Preguntas Frecuentes (/preguntas-frecuentes)`);
  
  //  res.write(cargarFooter()); ver la ejerctacion con el footter

  res.end();
  
};


module.exports = {homePage};