export class customError extends Error{
    constructor(
        public statuscode:number,
        public message:string  
    ){
        super(message)
    }
}
  
