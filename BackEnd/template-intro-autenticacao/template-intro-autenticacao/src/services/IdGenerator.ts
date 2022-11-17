import {v4} from "uuid"

export class IdGenerator{
    public generatId=()=>{
        return v4()
    }
}