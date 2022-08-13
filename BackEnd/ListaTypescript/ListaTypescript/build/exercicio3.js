var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
const filme = {
    name: "",
    ano: "",
    genero: GENERO.TERROR,
    pontuacao: ""
};
function caracteristica(name, ano, genero, pontuacao) {
    let apelido = name;
    let epoca = ano;
    let tipo = genero;
    let numero = pontuacao;
    return ` nome :${apelido} , anoLancamento : ${epoca} ,Genero :${tipo} , pontuacao :${numero}`;
}
console.log(caracteristica("chucky", 2000, "terror"));
//# sourceMappingURL=exercicio3.js.map