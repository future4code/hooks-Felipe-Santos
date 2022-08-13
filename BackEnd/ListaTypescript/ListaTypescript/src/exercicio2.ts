let variavel:string="teste"
let age:number=3
let tentativa:boolean=true

function tentativas(variavel:string,age:number,tentativa:boolean){
    let colocarAny: any
 colocarAny = 3
 colocarAny = "Luan"
 colocarAny = true
 return ` é uma string ${variavel} , e um numero  ${age} , e a terceira tentativa ${tentativa}`
}
console.log(tentativas("teste",3,true))