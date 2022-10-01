import BaseDatabase from "./BaseDatabase";
import { TABLE_USERS } from "./tableNames";
import { User } from "../models/User"


export class UserDatabase extends BaseDatabase{
   public async getAllUsers(){
        const result = await this.connection(TABLE_USERS).select()
        return result
    }
    public async createUser(user:User){
        await this.connection(TABLE_USERS).insert({
            id:user.getId(),
            email:user.getEmail(),
            password :user.getPassword()
        })
    }
    
    public async getUserById(id:string){
        const result= await this.connection(TABLE_USERS)
        .select()
        .where({id})
        return result
    }
}