export class User{
    constructor(
        public id:string,
        public email:string,
        public nome:string,
        public senha:string,
        public role:string
    ){}
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getNome(){
        return this.nome
    }
    getSenha(){
        return this.senha
    }

    
}