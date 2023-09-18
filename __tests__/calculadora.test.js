const calculadora = require("../UF1/calculadora/calculadora.js");

test("sumar 2 + 3 és igual a 5", () => {
  expect(calculadora.sumar(2, 4)).toBe(5);
});

test("restar 5 - 3 és igual a 2", () => {
  expect(calculadora.restar(5, 3)).toBe(2);
});

test("multiplicar 4 * 3 és igual a 12", () => {
  expect(calculadora.multiplicar(4, 3)).toBe(12);
});

test("dividir 10 / 2 és igual a 5", () => {
  expect(calculadora.dividir(10, 2)).toBe(5);
});
