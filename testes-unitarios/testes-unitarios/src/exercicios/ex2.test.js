import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });
  
  it("retorona false para `namaue`",()=>{
    const test = checaPalindromo("namaue");
    expect(test).toEqual(false);
  })
  it("retorna true para `poop`",()=>{
    const teste2=checaPalindromo("poop");
    expect(teste2).toEqual(true)
  })
});
