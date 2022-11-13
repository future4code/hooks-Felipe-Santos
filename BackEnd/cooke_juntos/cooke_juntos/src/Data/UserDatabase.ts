import {Basedatabase} from "./BaseDatabase"
import { Signup} from "../Type/Signup"
import { MyAccount } from "../Type/MyAccount"



export class UserDatabase extends Basedatabase{
    private userTable="Signup"
    private userTable2="Receitas"
    
    public Signup=async(user:Signup)=>{
        try{    await UserDatabase.connection.insert({
            id:user.id,
            name:user.name,
            email:user.email,
            password:user.password
        }).into(this.userTable)}
        catch(error:any){
            throw new Error(error.message)

        }
       
    }
    public findUserbyEmail=async(email:string)=>{
        try{
        const result=await UserDatabase.connection
        .where({email})
        .into(this.userTable)
        console.log(result,"userdatabase")
        return result[0]
     }catch(error:any){
        throw new Error(error.message)
    }
    }

    public CriarReceita=async(receitas:Receitas)=>{
        try{ await UserDatabase.connection.insert({
            id:receitas.id,
            title:receitas.title,
            description:receitas.description,
            date:receitas.date
        }).into(this.userTable2)}
        catch(error:any){
            throw new Error(error.message)

        }
       
    }
    
     


    

}

