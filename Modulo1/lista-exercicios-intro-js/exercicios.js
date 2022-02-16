// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura =prompt(Number("Digite Altura"))
  let largura=prompt(Number("Digite largura"))
  let calculaAreaRetangulo=(altura*largura)
  console.log(calculaAreaRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  let seuano =Number(prompt(" digite ano de seu nascimento "))
  let anoatua =Number(prompt(" digite ano atual "))
  let imprimeIdade=seuano-anoatua
  console.log(imprimeIdade) 
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    const calculaIMC=(peso,altura)
    return peso/(altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt(" digite ")
 const idade=prompt(" digite ")
 const email=prompt(" digite ")
 console.log("Meu nome é " + nome + ", tenho " + idade +" anos," + " e o meu email é  " +email )
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor =prompt(" digite uma cor favorita ")
  let cor2=prompt(" digite outra cor")
  let cor3=prompt("digite outra cor ")
  console.log( " " + cor+ " "   +cor2+ " " +cor3)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const retornaStringEmMaiuscula=(string)
  return string.toUpperCase()


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let calculaIngressosEspetaculo=(custo , valorIngresso)
   return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

   return string1.length === string2.length
   

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  let retornaPrimeiroElemento=(array)
  return retornaPrimeiroElemento [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  const teste=  array[array.length -1]
   return teste
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  
  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
   return (string1 === string2 ) || (string1 !== string2 )  
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  return (ano%4==0) && (ano % 100 !=0 ) || (ano%400 == 0 )
  

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
   const i  =prompt("maior de 18 ? ")
   const t=prompt("termino ensino medio ?")
   const aa=prompt(" tem disponibilidade de horario ?")
   const v= (i)
   
 
  
  

}