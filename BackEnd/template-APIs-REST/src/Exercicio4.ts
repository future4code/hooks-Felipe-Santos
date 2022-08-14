function doisNumeros(num1:number,num2:number):any{
    let maiorNumero
    let menorNumero
   
    if(num1>num2){
        maiorNumero=num1
        menorNumero=num2
    }else{
        maiorNumero=num2
        menorNumero=num1
    }
    const diferenca=maiorNumero-menorNumero
    return diferenca
}
console.log(doisNumeros(2,2))

