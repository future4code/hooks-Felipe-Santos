
    let Quantidade=Number(prompt("quantas maças voce ira querer ?"))
    let preço=Quantidade*1.30
    let desconto= Quantidade>12
    let diminuir=preço-1

console.log(`voce quer compra ${Quantidade} pelo preço 1.30 fica ${preço} se voce pediu meia duzia fica ${diminuir} com desconto`)
