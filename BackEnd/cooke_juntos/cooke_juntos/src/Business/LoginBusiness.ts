import { UserDatabase } from "../Data/UserDatabase"
import { Login } from "../Type/Login"

export class UserBusines{
    public loginAccount=async(input:Login)=>{
        try{
            const {email,password}=input
            if(!email){
                throw new Error("Email Invalido")
            }
            if(!password){
                throw new Error("Senha Invalida")
            }
             const userDatabase= new UserDatabase()
             
             const userFind=await userDatabase.findUserbyEmail(email)
             
             if(!userFind){
                throw new Error("Usuário não existe cria uma conta Business")
             }
             
             const result=await userDatabase.findUserbyEmail(
                email,
                
             )
             return result

        }catch(error:any){
            throw new Error(error.message)

        }
    }

}