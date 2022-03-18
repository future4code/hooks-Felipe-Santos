// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b)=>a-b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const arraypares=[];
  for (index of array) {
      if(index%2===0 ){
          arraypares.push(index)

      }
  }
 return arraypares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const pareselevado=[];
    for (index of array){
        if(index%2 ===0){
            pareselevado.push(index**2)
        }
    }
 return pareselevado
 
 }

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max.apply(null,array);

  
   
  }

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
 let maiornumero
 let menornumero
 let maiordividirmenor
 if(num1>num2){
   maiornumero=num1;
   menornumero=num2;
 }else {
   maiornumero=num2;
   menornumero=num1;
 }
 maiordividirmenor=maiornumero%menornumero===0
  const diferentenumeros=maiornumero-menornumero
  return {
    maiornumero:maiornumero,
    maiordivisivelpormenor:maiordividirmenor,
    diferenca:diferentenumeros
  }
 }
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  
}
 
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  {
    if(ladoA == ladoB && ladoB == ladoC && ladoC == ladoA){
       return 'Equilátero'
    }if(ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
       return 'Escaleno'
    }else{
       return 'Isósceles'
    }
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
 }