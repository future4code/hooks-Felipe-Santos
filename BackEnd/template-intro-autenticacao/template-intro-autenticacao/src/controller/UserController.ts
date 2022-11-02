import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, LoginInputDTO } from "../model/user";

export class UserController {

      public login= async (req: Request, res: Response) => {
        try {
          const {  email, password } = req.body;
    
          const input: LoginInputDTO = {
            email,
            password,
          };
          const userBusiness = new UserBusiness()
           const token=await userBusiness.login(input);
    
          res.status(201).send({ message: "Usuário criado!" ,token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

      public editUser = async (req: Request, res: Response) => {
        try {
          
          const input: EditUserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            token: req.headers.authorization as string
          };

          const userBusiness = new UserBusiness()
          userBusiness.editUser(input);
    
          res.status(201).send({ message: "Usuário alterado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 
 



}
