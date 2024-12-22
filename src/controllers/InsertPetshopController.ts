import PetshopRepository from "../adapters/db/PetshopRepository";
import { Response, Request, NextFunction } from "express";
import Id from "../core/shared/Id";
import RegisterPetshop from "../core/useCase/Petshop/RegisterPetshop";
import Petshop from "../core/model/Petshop";
import BuscarPets from "../core/useCase/pets/SearchPets";
import Validator from "../utils/Validator";

export default class PetshopController {
  static async insert(req: Request, res: Response): Promise<Response| any> {
    try {
      const {name, cnpj} = req.body
      const validateCnpj =  Validator.validateCnpj(cnpj)
     
      if(!validateCnpj){
        res.status(400).json({erro: "Cnpj Inválido"})
        return
      }
      const exists = Validator.existsPetshop(cnpj)
      if(exists ){
          res.status(400).json({erro: "Cnpj já Existe"})
          return
      }
      const ObjPetshop:Petshop = {
        id: Id.gerar(),
        name: name,
        cnpj:cnpj,
        pets:[],
      };
      
      const registerPetshop = new RegisterPetshop(new PetshopRepository());
      const newPetshop = registerPetshop.execute(ObjPetshop);
     
      res.status(201).json(newPetshop);

    
     
    } catch (error) {
      res.status(404).json({erro: "Erro desconhecido no controller"})
    }
  }
  
}
