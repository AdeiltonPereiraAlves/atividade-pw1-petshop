import PetshopRepository from "../adapters/db/PetshopRepository";
import { Response, Request, NextFunction } from "express";
import Id from "../core/shared/Id";
import RegisterPetshop from "../core/useCase/Petshop/RegisterPetshop";
import Petshop from "../core/model/Petshop";
import BuscarPets from "../core/useCase/pets/BuscarPets";
import Validador from "../core/utils/Validator";

export default class PetshopController {
  static async inserir(req: Request, res: Response): Promise<Response| any> {
    try {
      const {name, cnpj} = req.body
      const validarCnpj =  Validador.validateCnpj(cnpj)
      console.log(validarCnpj)
      if(!validarCnpj){
        res.status(400).json({erro: "Cnpj Inválido"})
        return
      }
      const exists = await Validador.existsPetshop(cnpj)
      if(exists ){
          res.status(400).json({erro: "Cnpj já Existe"})
          return
      }
      const ObjPetshop = {
        id: Id.gerar(),
        name: name,
        cnpj:cnpj,
        pets:[],
      };
      
      const registrarPetshop = new RegisterPetshop(new PetshopRepository());
      const novoPetshop = await registrarPetshop.executar(ObjPetshop);
     
        res.status(201).json(novoPetshop);

    
     
    } catch (error) {
      res.status(404).json({erro: "Erro desconhecido"})
    }
  }
  
}
