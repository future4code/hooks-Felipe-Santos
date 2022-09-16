import connection from "./connection";

const criarTabelaProdutos = async () => {
    try {
        await connection.raw(`
        
            
        `)

        console.log("")
    } catch (error:any) {
        console.log("")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaProdutos() {
    try {
        await connection.raw(`
            INSERT INTO todo ()
            VALUES 
           
        `)
        
        console.log("")
    } catch (error:any) {
        console.log("")
        console.log(error.sqlMessage)
    }
}

criarTabelaProdutos()
.then(() => popularTabelaProdutos())
.finally(() => process.exit())