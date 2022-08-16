const minhastring:string=("casa")
console.log(minhastring)
// ele não aceita 

const meuNumero:number=(2)
console.log(meuNumero)
// so aceita numero ,so aceitaria string  se fosse
// const meuNumero:Number || String =(2)


enum corFavorita{
    azul="azul",
    vermelho="vermelho",
    amarelo="amarelo",
    verde="verde",
    laranja="laranja",
    violeta="violeta",
    anil="anil",


}
const pessoa={
    name:"Felipe",
    idade:"22",
    cor:corFavorita.violeta
}
console.log(pessoa)