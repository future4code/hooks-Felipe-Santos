import { BaseDatabase } from "./BaseDatabase";
import { User } from "../Model/User";


export  class UserdataBase extends BaseDatabase{
  private static TABLE_NAME="";
  
  public async createrUser(
    id:string,
    email:string,
    name:string,
    senha:string,
  ):Promise<void>{
    try{
        await BaseDatabase.connection()
        .insert({
            id,
            email,
            name,
            senha,
        }).into(UserdataBase.TABLE_NAME);

    }catch(error){
        throw new Error("erro no UserdataBase");

    }
  }

  public async Login(email:string):Promise<void>{
    const result=await BaseDatabase.connection()
    .select("*")
    .from(UserdataBase.TABLE_NAME)
    .where({email});
       
   
  } 

}