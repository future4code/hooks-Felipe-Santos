const nome: string = "Felipe De Oliveira Santos "
const data:string="14/01/2000"


function receber(nome:string , data:string){
     const exemplo=data.split("/")

    return `Olá me chamo ${nome}, nasci no dia ${exemplo[0]}  do mês de ${exemplo[1]} do ano de ${exemplo[2]}`
    

}
console.log(receber(nome,data))