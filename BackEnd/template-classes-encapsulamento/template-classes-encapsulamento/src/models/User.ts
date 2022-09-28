export  class Users{
    public id:string
    public email:string
    public password:string

 constructor(id:string ,email:string,password:string){
    this.id=id
    this.email=email
    this.password=password
 }

 getEmail():string{
    return this.email

 }
 getId():string{
   return this.id
 }
 
 getPassword():string{
   return this.password
 }

}

