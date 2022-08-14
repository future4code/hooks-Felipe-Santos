function ajustapreco(preco) {
    const valorAjustado = preco.toFixed(2).replace('.', ',');
    return "R$" + valorAjustado;
}
const estoque = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
];
function agoraVai(lista) {
    const funciona = lista.map((item) => {
        return item.valorUnitario;
    });
    return funciona;
}
console.log(agoraVai(estoque));
//# sourceMappingURL=desafio1.js.map