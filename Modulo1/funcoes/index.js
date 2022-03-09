//exercicio 01
function imprimirOla(nome, idade ,profissao, estado){
    console.log(`Eu Sou ${nome} , Tenho ${idade} , moro  ${profissao} e sou ${estado}`)
    
    }
    imprimirOla("felipe De Oliveira Santos"," 22 anos ","em Niteroi" , " estudante")
    
    function imprimirteste() {
    console.log(" Eu sou Felipe, tenho 22 anos, moro em Niteroi e sou estudante.")
    
    }
    imprimirteste()
    
    // exercicio 02 
    function numero(num1,num2){
      return num1+num2
    }
    console.log(numero( 10,20))
    
    function numero2(num1,num2){
        return num1<=num2
    }
    console.log(numero2(10,20))
    
    function numero3(num1,){
        return (num1%2 ==0)
    }      
    console.log(numero3(20))
      
    let textoDoUsuario=prompt("insira um texto")
    const outrafuncao=function(texto){
        return texto.toUpperCase()
    }
    const resposta=outrafuncao(textoDoUsuario)
    console.log(resposta)
    
    // erxercicio03
    let digita=Number(prompt("digite um numero"))
    let digita2=Number(prompt("digite outro valor"))
    const texte=function(texto){
        return digita+digita2
    }
    const soma=texte(digita,digita2, )
    console.log(soma)
    
    const texte2=function(texto){
        return digita*digita2
    }
    const multiplica=texte2(digita,digita2)
    console.log(multiplica)
    
    const diferenca=function(texto){
        return digita-digita2
    }
    const diferen=diferenca((digita,digita2))
    console.log(diferen)
    
    const divisao=function(texti){
        return digita/digita2
    }
    const divi=divisao((digita,digita2))
    console.log(divi)
    console.log(digita,digita2)
    
    //exericio teorico 
    // aparecera 5*2 = 10 5*10=50
    // acho que daria erro
    // voce digitara um texto e saira minusculo + palavra cenoura 
    /// saira sera reposta=outrafuncao(textoDousuario)