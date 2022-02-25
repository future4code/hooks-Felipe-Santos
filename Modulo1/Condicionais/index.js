// exercicio 01 escrita 
function idade (digitarIdade) {
    if(digitarIdade > 18){

        return `Parabens voce pode dirigir`        
    }else{
        return `voce e menor de idade ainda não pode `

    }
}
let digitarIdade=prompt("digite sua idade ")
console.log(idade(digitarIdade))
          
 //exercicio 02

 function turma(digitahora){
      if (digitahora ==="M"){
           return `bom dia`
      
        } else if (digitahora==="V") {
         return `Boa tarde`
        }else if (digitahora ==="N")
         return `boa noite `
          
          
    }  
 const digitahora=prompt(" Verificando turno ")
 console.log(turma(digitahora))
   
     //exercicio 03

  let turma = "M";
  switch(turma) {
      case"M":
      console.log("Bom dia ");
      break;
     case "V":
       console.log("Boa Tarde")
      break;
     case "N":
     console.log("Boa noite ")
     break;
    }

    //exercicio 04
    let filme=prompt("que filme  ?")
    let preco=prompt(" preco do ingresso ")
     if (filme==="fantasia" && preco ==="15"){
         console.log("bom filme ")
         
     } else {
         console.log("escolha outro filme ")
     }

   
   
   
   
   
   
    //exercicio teorico 
   //a) se o numero for divisivel por 2 e der zero ele passa  s e nao reprova
   //B) impares 
   //C)pares
   // exercicio 02
   //a) escolher uma fruta e sair o valor dela 
   //B)2.25 se for maça
   //c)seria automatico e sairia valor da pera , ele iria ler tudo
   //exercicio 03
   //A)se o numero digitado for maior que 0 ele passa se nao reprova
   //B) numero 10 ele passa , numero -10 ele nao lera 
   //C) sim ele tirar ler mais n aparecera resposta 

