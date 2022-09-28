export class Product {
   public id: string
   public name: string
   public price: number

constructor(id:string,nome:string,price:number){
    this.id=id
    this.name=nome
    this.price=price
}

getId():string{
    return this.id
}
getName():string{
    return this.name
}
getPrice():number{
    return this.price
}

}