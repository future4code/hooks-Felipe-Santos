function checaRenovacaoRG(anoatual:number,anoNascimento:number,anoEmissao:number):string{
    let idade:Number
    let tempoCarteira:Number
    
 if(idade<=20){
    return tempoCarteira >=5? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
 } else if (idade >=20 || idade <= 50){
    return tempoCarteira >=10? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
   
 }else if (idade > 50){
    return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
 
}else {
    return "error"

   }
}
console.log(checaRenovacaoRG(2020,2000,2000))