import { app } from "./app"
import { Usercontroller } from "./Controller/Usercontroller"
// import { createTask } from './endpoints/createTask'

const userController= new Usercontroller
app.post('/user', userController.createUser)

// app.post('/task', createTask)


