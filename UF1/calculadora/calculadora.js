// calculator.js
const calculadora = {
  // Funció per sumar dos números
  sumar: (a, b) => {
    return a + b;
  },

  // Sense arrow function
  sumar2: function (a, b) {
    return a + b;
  },

  // Funció per restar dos números

  // Funció per multiplicar dos números

  // Funció per dividir dos números
  // Verificar si b és 0 per evitar una divisió per zero
};

// Exportar l'objecte calculator com a exportació per defecte
module.exports = calculadora;
