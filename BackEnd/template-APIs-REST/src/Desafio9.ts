function perguntas(idade:Number,Escola:String,hora:Number,tempo:string):any{
   
    if(idade>18 && Escola==="Completo" && tempo==="true" ){
        return "Parabens Voce e Qualificado"

    }else {
        return "voce não sera aceito devido falta de Requisito"
    }

}
console.log(perguntas(19,"Completo",18,"true"))

 
   
  
 

