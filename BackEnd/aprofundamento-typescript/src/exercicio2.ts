function obterEstatisticas(numeros:any) {
    
    const numerosOrdenados = numeros.sort(
        
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros],
        menor: numerosOrdenados[0],
        media: soma / numeros
    }

    return estatisticas
}