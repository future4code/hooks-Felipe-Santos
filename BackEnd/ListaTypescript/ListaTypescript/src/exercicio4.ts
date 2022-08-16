

enum  profissoes{
    MARKETING="marketing",
    VENDAS="vendas",
    FINANCEIRO="financeiro",

}
type Funcionario={
    nome:string,
    salário:number,
    setor:profissoes,
    presencial:boolean
 }

const array=[
	{ nome: "Marcos", salário: 2500, setor: profissoes.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: profissoes.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: profissoes.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: profissoes.FINANCEIRO, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: profissoes.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: profissoes.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: profissoes.FINANCEIRO, presencial: true }
]


function pegando(array:Funcionario[]):Funcionario[]{
    const empregados=array.filter((escravo:Funcionario)=>{
        return escravo.setor ===profissoes.MARKETING && escravo.presencial === true
    })
   return empregados
}
console.log(pegando(array))
