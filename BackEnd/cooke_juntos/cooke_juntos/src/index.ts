
import express, { Express, Request, Response } from "express"
import cors from "cors"
import { userRouter } from "./Routers/userRouter"




const app: Express = express()
app.use(express.json())
app.use(cors())



app.post ("/signup",userRouter)
app.get("/Login",userRouter)
app.post("/Receitas",userRouter)




app.listen(3003, () => {
   console.log("Server running on port 3003")
})