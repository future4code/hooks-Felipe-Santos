function DoisNumeros(num1:number,num2:number){
   let somar:number=num1+num2
   let div:number=num1/num2
   let mul:number=num1*num2
   let sub:number=num1-num2
   let maiorNumero:number

   if(num1>num2) {
    let maiorNumero=num1
   } else {
    

   }
   return `A soma ${somar}, div ${div}, mult ${mul},sub ${sub} maior Numero ${maiorNumero} `
}

console.log(DoisNumeros(5,2))