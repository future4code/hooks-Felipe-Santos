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
console.log(checaTriangulo(5, 4, 3));
//# sourceMappingURL=Exercicio.js.map