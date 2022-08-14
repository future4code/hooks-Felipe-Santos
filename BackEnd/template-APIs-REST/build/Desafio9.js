function perguntas(idade, Escola, hora, tempo) {
    if (idade > 18 && Escola === "Completo" && tempo === "true") {
        return "Parabens Voce e Qualificado";
    }
    else {
        return "voce não sera aceito devido falta de Requisito";
    }
}
console.log(perguntas(19, "Completo", 18, "true"));
//# sourceMappingURL=Desafio9.js.map