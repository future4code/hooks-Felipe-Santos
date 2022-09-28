// type para tipar no typescript com camelCase
// export type Purchase = {
//     id: string,
//     userId: string,
//     productId: string,
//     quantity: number,
//     totalPrice: number
// }

export class Purchase{
    private id:string
    private userId:string
    private productId:string
    private quantity :number
    private totalPrice:number

getId():string{
    return this.id
}
getuserId():string{
   return this.userId

}
getProductid():string{
    return this.productId
}
getQuantity():number{
    return this.quantity
}
getTotalPrice():number{
    return this.totalPrice
}
}

// type para tipar no banco de dados com snake_case
export type PurchaseDB = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}