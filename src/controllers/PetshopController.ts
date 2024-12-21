import PetshopRepository from "../adapters/db/PetshopRepository";
import { Response, Request, NextFunction } from "express";
import Id from "../core/shared/Id";
import RegisterPetshop from "../core/useCase/RegisterPetshop";

export default class PetshopController {
  static async inserir(req: Request, res: Response): Promise<NextFunction| any> {
    try {
      const pet = req.petshop
      const petshop = {
        id: Id.gerar(),
        name: pet.name,
        cnpj: pet.cnpj,
        pets: pet.pets,
      };
      
      const registrarPetshop = new RegisterPetshop(new PetshopRepository());
      const novoPetshop = await registrarPetshop.executar(petshop);
     
        res.status(201).json(novoPetshop);

    
     
    } catch (error) {
      res.status(404).json({erro: "Erro desconhecido"})
    }
  }
}
