import {Basedatabase} from "./BaseDatabase"
import { Signup} from "../Type/Signup"
import {Login} from "../Type/Login"


export class UserDatabase extends Basedatabase{
    
    public Signup=async(user:Signup)=>{
        try{    await UserDatabase.connection.insert({
            id:user.id,
            name:user.name,
            email:user.email,
            password:user.password
        }).into("Signup")}
        catch(error:any){
            throw new Error(error.message)

        }
       
    }
    public findUserbyEmail=async(email:string)=>{
        try{
            const result=await UserDatabase.connection
        .where({email})
        .into("Signup")
        console.log(result,"userdatabase")
        return result[0]
     }catch(error:any){
        throw new Error(error.message)
    }
    }
    
    public Login=async(user:Signup)=>{
        try{    await UserDatabase.connection.insert({
            email:user.email,
            password:user.password
        }).into("Signup")}
        catch(error:any){
            throw new Error(error.message)

        }
       
    }

    

}

