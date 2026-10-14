const {  somar, subtrair, multiplicar, dividir } = require("./calculador");

/* --------- SOMA ------------- */
describe("Testes da função SOMAR", () => {
  test("soma dois números e ver se o resultado está correto", () => {
    expect(somar(2, 3)).toBe(5);
  });

  test("soma dois números negativos e ver se o resultado está correto", () => {
    expect(somar(-2, -3)).toBe(-5);
  });
});


/* ------ SUBTRAIR ------ */
describe("subtrair", () => {
  test("subtrai dois números e ver se o resultado está correto", () => {
    expect(subtrair(10, 5)).toBe(5);
  });
});


describe("multiplicar", () => {
  test("multiplica dois números e ver se o resultado está correto", () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  test("qualquer número vezes zero é zero", () => {
    expect(multiplicar(5, 0)).toBe(0);
  });
});

describe("dividir", () => {
  test("divide dois números", () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test("lança erro ao dividir por zero", () => {
    expect(() => dividir(10, 0)).toThrow("Divisão por zero não é permitida");
  });
});