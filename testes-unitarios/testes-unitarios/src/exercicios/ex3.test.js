
import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("checar itens duplicados",()=>{
        const checar=checaItensDuplicados(["arara","jabuti"])
        expect(checar).toEqual(true)

    });
});
