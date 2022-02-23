// escrita exercicio 01
const pessoa={
    nome:" felipe",
    apelido: [ "fifi","lipe" ,"lipinho" ,]

}
const meunome=pessoa.nome
const sobre=pessoa.apelido
console.log(`meu nome é ${meunome} , mas pode me chamar de : ${sobre}` )

// exericio02
const objeto={
 nome: "Felipe",
 idade:"22",
 profissao:"Estudante",
}
const objeto2={
 nome: "Carla",
 idade: "19",
 Profissao:"vendendora" 
}
console.log(objeto.nome , objeto.nome.length , objeto.idade ,objeto.profissao , objeto.profissao.length)
console.log(objeto2.nome , objeto2.nome.length , objeto2.idade , objeto2.Profissao , objeto2.Profissao.length)

//exercicio 03
const carrinho= []

const sacolao=[
    {nome : "banana" ,disponibilidade : true, }
    , {nome : "uva " , disponibilidade : true }
    , {nome : "laranja" , disponibilidade : true }

    
]
carrinho.push(sacolao )
console.log(sacolao)

// Desafios 
const nome =prompt("digite seu nome ")
const idade =prompt("digite sua idade ")
const prof=prompt("digite sua profissao")
let perguntas={
    nome: nick=nome,
    idade: age=idade,
    prof : trabalho=prof

}
console.log(perguntas)

//Desafio 02
const primeirofilme={
    nome : "MIB homens de preto",
    lancamento: "11 de julho de 1997",
    
}
const segundofilme={
    nome: "MIB Homens de preto 2",
    lancamento: "3 de julho de 2002",
    
}
  const data1=1997
  const data2=2022
  const igual= data1===data2
  const dif= data1<data2
  console.log(` O primeiro filme  foi lançado antes do segundo ? ${igual} `)
  console.log(` o segundo filme foi lançado no mesmo ano ? ${dif}`)
//exercicio teorico 01
// ira parecer Matheus Nachtergaele, ira tirar selto mello , escolher canal brasil

