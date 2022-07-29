import { checaBissexto } from "./ex1";

describe("Checa bissexto", () => {
  test("retorna true pra 1600", () => {
    const resultado = checaBissexto(1600);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 2000..", () => {
    const resultado = checaBissexto(2000);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 1996", () => { const testando1=checaBissexto(1996);
    expect(testando1).toEqual(true);
  });
  
  test("retorna true pra 2008", () => {
    const testando2=checaBissexto(2008);
  expect(testando2).toEqual(true)
  });
  

  test("retorna false pra 2007", () => {
    const testando3=checaBissexto(2007);
  expect(testando3).toEqual(false)
  });
  
});


