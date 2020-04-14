// lo dejo con strig anidado de response += para tener como ejemplo
const theaters = require("../data/theatres.json");


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

module.exports = {sucursales}
