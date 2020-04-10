
const faq = require("../data/faqs.json");

function faqs(req, res) {
  let response = "Título: Preguntas Frecuentes. \n\n";
  let totalDeFaqs = faq.length;
  response += `Total  de Preguntas : ${totalDeFaqs}`;

  let listedfaqs = faq.filter((elemA) => {
    return elemA.faq_title;
  });

  response += `\n\n Listado de Preguntas`;
  listedfaqs.forEach((elem) => {
    response += `\n\n Pregunta - ${elem.faq_title}`;
    response += `\n\n Respuesta - ${elem.faq_answer}`;
  });

  res.end(response);
};

module.exports = {faqs}