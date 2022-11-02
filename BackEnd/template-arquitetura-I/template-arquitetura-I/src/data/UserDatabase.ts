import { Basedatabase } from "./BaseDatabase";
import { user } from "../types/user";

export class UserDatabase extends Basedatabase {
   public insertUser = async(
      user: user
   ) => {
      await UserDatabase.connection.insert({
         id: user.id,
         name: user.name,
         nickname: user.nickname,
         email: user.email,
         password: user.password
      }).into('Architecture_User')
   }

}
