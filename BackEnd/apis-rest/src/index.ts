import express from "express"
import cors     from "cors"


let users=[
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12,
        adicionar:""
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]
type user= {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
    adicionar:string
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

const app=express()
app.use(express.json())
app.use(cors())

app.get("/users",(req,res)=>{
    try {
        const user:string =req.query.user as string
        const userfound:user | number =users.findIndex((Usuario)=>{
            return Usuario.name===user
        })
        if(!userfound){
            throw new Error("Insira um Usuario Porfavor")
        }
        res.send(200).send(userfound)

    }catch{
        res.send("Não achei porfavor tente novamente ")

    }
})

app.get("/users/add ",(req,res)=>{
    const adicionar:any={
        adicionar:req.body.adicionar
    }
    users.push(adicionar)
    res.status(201).send(adicionar)
   

})



app.listen(3003,()=>{
    console.log("Server is running in http://localhost:3003")
})