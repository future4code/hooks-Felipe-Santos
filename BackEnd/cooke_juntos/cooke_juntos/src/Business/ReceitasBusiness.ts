
import { UserDatabase } from "../Data/UserDatabase"
import { Authenticator } from "../Services/Authenticator"
import { IdGenerator } from "../Services/IdGenerator"

const idGenerator=new IdGenerator()

export class UserBusines{
   public Receitas=async(input:Receitas)=>{
   try{
     const{token,title,description,date}=input
     if(!title){
      throw new Error("Digite um Titulo")
     }
     if(!description){
      throw new Error("digite uma Descrição")
     }
     if(!date){
      return Date.now()
     }
   

     const id:string=idGenerator.generateId();

     const userDatabase= new UserDatabase()
     
     await userDatabase.CriarReceita({
       token,
       id,
       title,
       description,
       date

     })

     
   }catch(error:any){
      throw new Error(error.message)

   }}
  

}