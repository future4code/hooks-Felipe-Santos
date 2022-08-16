const minhastring = ("casa");
console.log(minhastring);
const meuNumero = (2);
console.log(meuNumero);
var corFavorita;
(function (corFavorita) {
    corFavorita["azul"] = "azul";
    corFavorita["vermelho"] = "vermelho";
    corFavorita["amarelo"] = "amarelo";
    corFavorita["verde"] = "verde";
    corFavorita["laranja"] = "laranja";
    corFavorita["violeta"] = "violeta";
    corFavorita["anil"] = "anil";
})(corFavorita || (corFavorita = {}));
const pessoa = {
    name: "Felipe",
    idade: "22",
    cor: corFavorita.violeta
};
console.log(pessoa);
//# sourceMappingURL=exercicio1.js.map