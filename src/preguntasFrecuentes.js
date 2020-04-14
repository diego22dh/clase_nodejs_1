
const faq = require("../data/faqs.json");

function faqs(req, res) {
  res.write("Título: Preguntas Frecuentes. \n\n");
  let totalDeFaqs = faq.length;
  res.write(`Total  de Preguntas : ${totalDeFaqs}`);

  let listedfaqs = faq.filter((elemA) => {
    return elemA.faq_title;
  });

  res.write(`\n\n Listado de Preguntas`);
  listedfaqs.forEach((elem) => {
    res.write (`\n\n Pregunta - ${elem.faq_title}`);
    res.write (`\n\n Respuesta - ${elem.faq_answer}`);
  });

  res.end();
};

module.exports = {faqs}