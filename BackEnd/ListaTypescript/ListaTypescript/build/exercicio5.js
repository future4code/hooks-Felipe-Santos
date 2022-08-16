const email = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
];
function escolhido(email) {
    const admnistrador = email.filter((pessoas) => {
        return pessoas.role === "admin";
    });
    return admnistrador;
}
console.log(escolhido(email));
//# sourceMappingURL=exercicio5.js.map