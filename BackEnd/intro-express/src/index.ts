import express from 'express'
import cors from 'cors'

const app=express()

app.use(express.json())
app.use(cors())


app.get("/users",(req,res)=>{
    const users=array.map((usuario)=>{
        return usuario.name
    })
    res.send(array)
})

app.delete("/users/:userID",(req,res)=>{
    const userID=req.params.userID

    const deletando=array.map((user)=>{
        if(user.id===userID){
            return{
                ...user,
                array:[]
            }
        } else {
            return user
        }
    })
    res.send(array)
})


type cadastro={
    id:number
    name:string
    phone:number
    email:string
    website:string
}

const array=[
    {id:"a1s2d3f4" ,name:"Carlos",phone:"40028922",email:"Carlosfelipe@gmail.com",website:"carlosVemCompraComigo.com.br"},
    {id:"a1b2c3d4", name:"Rainha Elizabeth",phone:"36037354",email:"rainhaDaParadaToda@gmail.com",website:"RainhaDaInglaterra#.com.br"}

]



app.listen(3003,()=>console.log("O Servido esta Online na porta 3003"))
