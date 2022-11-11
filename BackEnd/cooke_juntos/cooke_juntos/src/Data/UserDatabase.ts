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
    public Login=async(Login:Login)=>{
        try{await UserDatabase.connection.insert({email:Login.email,password:Login.password}).into("Signup")
    }catch(error:any){
        throw new Error(error.message)
    }
    }

    

}

