import { UserDatabase } from "../Data/UserDatabase"
import { Login } from "../Type/Login"
import { Authenticator } from "../Services/Authenticator"

const authenticator=new Authenticator()


export class UserBusines{
    public loginAccount=async(input:Login)=>{
        try{
            const {id,email,password}=input
            if(!email){
                throw new Error("Email Invalido")
            }
            if(!password){
                throw new Error("Senha Invalida")
            }
             
             const userDatabase= new UserDatabase()
             
             const userFind=await userDatabase.findUserbyEmail(email)
             
             if(!userFind){
                throw new Error("Usuário não existe crie uma conta")
             }
             
             await userDatabase.findUserbyEmail(
                email,
                
                
                
             )
             const token=authenticator.generateToken({id})
                   return token  
        }catch(error:any){
            throw new Error(error.message)

        }
    }

}