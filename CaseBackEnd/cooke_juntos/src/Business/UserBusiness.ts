import {UserDataBase} from "../data/UserDataBase"

export class UserBusiness{
    public InsertUser=async(input:any)=>{
    
        try{
            const{competicao,atleta,value,unidade}=input
            if(!competicao ||!atleta! ||value || !unidade)
            {
                throw new Error("Preencha os campos competicao,atleta,value,unidade")
            }
            const id:string=Date.now().toString()
    
            const userDatabase= new UserDataBase()
    
            await userDatabase.InsertUser({
                id,
                competicao,
                atleta,
                value,
                unidade
            })
    
        }catch(error:any){
            throw new Error(error.message)
    
        }
    }
}
