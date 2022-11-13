
import {UserDatabase} from "../Data/UserDatabase"
import { Authenticator } from "../Services/Authenticator"
import { IdGenerator } from "../Services/IdGenerator"


const idGenerator=new IdGenerator()
const authenticator=new Authenticator()


export class  UserBusiness{
    public CreateAccount=async(input:any   
        )=>{
            try{
                const{name,email,password}=input
                if(!name){
                    throw new Error("Name Invalido")
                }
                if(!email){
                    throw new Error("Email Invalido")
                }
                if(!password){
                    throw new Error("Senha Invalida")
                }
                if(password<6){
                    throw new Error("Senha tem que ser menor que 6 caracteres")
                }
                if(!email.includes("@")){
                    throw new Error("Não esqueça do @ ")

                }
                const id:string=idGenerator.generateId();
        
                const userDatabase= new UserDatabase()
        
                 await userDatabase.Signup({
                    id,
                    name,
                    email,
                    password
                })
                const token=authenticator.generateToken({id})
                   return token               
            }catch(error:any){
                throw new Error(error.message)
            }
        }


}
