import express, { response, Response } from 'express'
import cors from 'cors'
import { transpileModule, updateLanguageServiceSourceFile } from 'typescript'

const app=express()

app.use(express.json())
app.use(cors())

app.get('/ping',(req,res)=>{
    res.send("Pong!🏓")

})

app.get("/afazeres/all",(req,res)=>{
    const afazeresAll=array.map((verdade)=>{
        return verdade

    })
    res.send(afazeresAll)
    
})
app.get("/afazeres/true",(req,res)=>{
    const afazeresTrue=array.map((truee)=>{
      if(truee.completed===true)
      return (true)
    })
    res.send(afazeresTrue)
})

app.get("/afazeres/false",(req,res)=>{
    const afazeresTrue=array.map((truee)=>{
      if(truee.completed===false)
      return (false)
    
      
      
    })
    res.send(afazeresTrue)
})



type usuarios={
 userId:number
 id:number
 title:string
 completed:boolean

}

const array=[
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
        
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed:false
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
      },
      {
        userId: 1,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
      },
      {
        userId: 1,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false
      },
]


app.listen(3003,()=>{
    console.log("Server is running in http://localhost:3003")
})