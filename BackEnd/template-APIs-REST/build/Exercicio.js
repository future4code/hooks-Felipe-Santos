function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
        return "Escaleno";
    }
    else if (a === b && b === c) {
        return "Equílatero";
    }
    else {
        return "Isósceles";
    }
}
console.log(checaTriangulo(4, 4, 4));
//# sourceMappingURL=Exercicio.js.map