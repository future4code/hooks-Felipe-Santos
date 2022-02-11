//Desafio 01
const escolha=prompt("Escolha Graus em K° C° F°")
console.log(escolha )
const kelvin= (escolha - 32)*(5/9) + 273.15
const Fahrenhei=(escolha )*(9/5)+ 32
console.log( kelvin,Fahrenhei, ) 

//Desafio 02
let wats = 280*0.05
let desconto = 280*0.05*0.85
console.log("valor sem desconto " ,wats,"valor com desconto",desconto )
// 280kWh 14 reais com desconto 11.9
 
// Desafio03

const escolha=prompt("Converte 20LB pra KG ")
const resultado= escolha/2.205
const escolha2=prompt("10.5oz para kg ")
const resultado2=escolha2/35.274
const escolha3=prompt("converte 100 milha em m")
const resultado3=escolha3*1609 
const escolha4=prompt(" 50ft para m")
const resultado4=escolha4/3.281 
const escolha5=prompt("103.56gal para litro")
const resultado5=escolha5*3.785
const escolha6=prompt("450xic para litro")
const resultado6=escolha6*(25/6)
const resultado7=prompt("qual valor original que voce quer mudar da xic?")

console.log("20lb equivalem a " ,resultado, "kg")
console.log("10.5oz equivalem a ",resultado2, "Kg")
console.log("100mi equivalem a" ,resultado3,"m")
console.log("50ft equivalem a" ,resultado4, "m")
console.log("103.56gal equivalem a" ,resultado5,"L" )
console.log("450 xic equivalem a",resultado6,"L")
console.log("450 xic correto ?")