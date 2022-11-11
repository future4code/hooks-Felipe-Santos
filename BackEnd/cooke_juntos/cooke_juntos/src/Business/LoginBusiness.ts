import { UserDatabase } from "../Data/UserDatabase"

export class UserBusinesss{
    public loginAccount=async(input:any)=>{
        try{
            const {email,password}=input
            if(!email){
                throw new Error("Email Invalido")
            }
            if(!password){
                throw new Error("Senha Invalida")
            }
             const userDatabase= new UserDatabase()

             await userDatabase.Login({
                email,
                password
             })

        }catch(error:any){
            throw new Error(error.message)

        }
    }

}