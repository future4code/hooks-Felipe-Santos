const saudacao=(" Boas vindas ao jogo de Blackjack! ")
 console.log(saudacao)
  
 if(confirm(" Deseja jogar ? sim ou não")) {
    console.log(confirm ` Muito bem vamos lá`)
    
	      
} else { 
   console.log(` O Jogo Acabou `)
}
function comprarCarta() {
   const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
   const naipes = ["♦️", "♥️", "♣️", "♠️"]
   const numero = cartas[Math.floor(Math.random() * 13)]
   const naipe = naipes[Math.floor(Math.random() * 4)]
   let valor
   if (numero === "A") {
      valor = 11
    } else if (numero === "J" || numero === "Q" || numero === "K") {
      valor = 10} 
      else { 
         valor = Number(numero)
       }
       const carta = {
         texto: numero + naipe,
         valor: valor
       }
     
       return carta
     }

     function comprarCarta2() {
      const cartas2 = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
      const naipes2 = ["♦️", "♥️", "♣️", "♠️"]
      const numero2 = cartas2[Math.floor(Math.random() * 13)]
      const naipe2 = naipes2[Math.floor(Math.random() * 4)]
      let valor2
      if (numero2 === "A") {
         valor2 = 11
       } else if (numero2 === "J" || numero2 === "Q" || numero2 === "K") {
         valor2 = 10} 
         else { 
            valor2 = Number(numero2)
          }
          const carta2 = {
            texto2: numero2 + naipe2,
            valor2: valor2
          }
        
          return carta2
        }
     
        function comprarCarta3() {
         const cartas3 = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
         const naipes3 = ["♦️", "♥️", "♣️", "♠️"]
         const numero3 = cartas3[Math.floor(Math.random() * 13)]
         const naipe3 = naipes3[Math.floor(Math.random() * 4)]
         let valor3
         if (numero3 === "A") {
            valor3 = 11
          } else if (numero3 === "J" || numero3 === "Q" || numero3 === "K") {
            valor3 = 10} 
            else { 
               valor3 = Number(numero3)
             }
             const carta3 = {
               texto3: numero3 + naipe3,
               valor3: valor3
             }
           
             return carta3
           }
     
           function comprarCarta4() {
            const cartas4 = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
            const naipes4 = ["♦️", "♥️", "♣️", "♠️"]
            const numero4 = cartas4[Math.floor(Math.random() * 13)]
            const naipe4 = naipes4[Math.floor(Math.random() * 4)]
            let valor4
            if (numero4 === "A") {
               valor4 = 11
             } else if (numero4 === "J" || numero4 === "Q" || numero4 === "K") {
               valor4 = 10} 
               else { 
                  valor4 = Number(numero4)
                }
                const carta4 = {
                  texto4: numero4 + naipe4,
                  valor4: valor4
                }
              
                return carta4
              }
     
     
     const carta3=comprarCarta3();
     const carta = comprarCarta();
     const carta2=comprarCarta2();
     const carta4=comprarCarta4();
     const soma=carta.valor+carta2.valor2
     console.log(`Usuario -`,`cartas:`,carta.texto,carta.valor  , carta2.texto2 + carta2.valor2 , ` pontuação :` , soma)
     const soma2=carta3.valor3+carta4.valor4
     console.log(`Computador -`,`cartas:`,carta3.texto3,carta3.valor3, carta4.texto4 + carta4.valor4, `pontuação :` ,soma2)
       if(soma>soma2){
           console.log( `Vitoria do Usuario`)
          }  else if (soma <soma2) {
             console.log(`Vitoria do Computador`)
          } else if (soma===soma2){
            console.log("empate")
          }  else if (soma<21) {
            console.log(`Vitoria do Computador`)
            
          } else { (soma2<21)
            console.log(`Vitoria do Usuario`)

          }    