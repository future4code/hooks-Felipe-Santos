enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const filme={
    name:"",
    ano:"",
    genero:GENERO.TERROR,
    pontuacao:""
}

function caracteristica(name:string,ano:number,genero:string,pontuacao?:number){
   let apelido:string=name
   let epoca:number=ano
   let tipo:string=genero
   let numero:number=pontuacao
   return ` nome :${apelido} , anoLancamento : ${epoca} ,Genero :${tipo} , pontuacao :${numero}`

}
console.log(caracteristica("chucky",2000,"terror"))