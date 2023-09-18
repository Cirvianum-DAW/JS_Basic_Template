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
  restar: (a, b) => {
    return a - b;
  },

  // Funció per multiplicar dos números
  multiplicar: (a, b) => {
    return a * b;
  },

  // Funció per dividir dos números
  dividir: (a, b) => {
    // Verificar si b és 0 per evitar una divisió per zero
    if (b === 0) {
      throw new Error("No es pot dividir per zero.");
    }
    return a / b;
  },
};

// Exportar l'objecte calculator com a exportació per defecte
module.exports = calculadora;
