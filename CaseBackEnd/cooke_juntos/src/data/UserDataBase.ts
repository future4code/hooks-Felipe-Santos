import { BaseDatabase } from "./BaseDatabase";
import {Cadastro} from "../Type/Cadastro"

export class UserDataBase extends BaseDatabase{
    public InsertUser=async(
        Cadastro:Cadastro
    )=>{
        await UserDataBase.connection.insert({
            id:Cadastro.id,
            competicao:Cadastro.competicao,
            atleta:Cadastro.atleta,
            value:Cadastro.value,
            unidade:Cadastro.unidade

        }).into('Cadastro_Atleta')
    }
}