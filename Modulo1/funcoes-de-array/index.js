//exercicio 01 escrita
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//a) Crie um novo array que contenha apenas o nome dos doguinhos
 const arrayAPenasNomesDogs=pets.map((pet,index,array)=> {
return pet.nome
})
console.log(arrayAPenasNomesDogs)
//b) Crie um novo array apenas com os cachorros salsicha
const apenasnomesalsicha=pets.filter((Salcicha,index,array)=>{
 return Salcicha.raca===("Salsicha")
})
console.log(apenasnomesalsicha)
// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!
const descontopoodle=pets.filter((raca,index,array)=>{
    return raca.raca===("Poodle")
}).map((poodle =>{
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}`
}))
console.log(descontopoodle)

//exercicio 02
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//a) Crie um novo array que contenha apenas o nome de cada item
 const arrayapenasnome=produtos.filter((produto,index,array)=>{
     return produto.nome

 })
 console.log(arrayapenasnome)

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
 let pegarbebida=produtos.filter((categoria,index,array)=>{
     return categoria.categoria===("Bebidas")
})
console.log(pegarbebida)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
  const pegarlimpeza=produtos.filter((Limpeza,index,array)=>{
     return Limpeza.nome===('Ypê')
 })
 console.log(pegarlimpeza)