import { AuthenticationData } from "../model/user"
import * as jwt from "jsonwebtoken"

export class Authenticator{
    public generateToken=({id}:AuthenticationData): string=>{
        const token=jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn:"1h"}
        )
         return token
    }
    getTokenData=(token:string)=>{
        const payload=jwt.verify(token,process.env.JWT_KEY as string)
        return payload
    }
}