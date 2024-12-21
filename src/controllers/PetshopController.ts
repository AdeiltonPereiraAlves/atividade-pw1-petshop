import PetshopRepository from "../adapters/db/PetshopRepository";
import { Response, Request, NextFunction } from "express";
import Id from "../core/shared/Id";
import RegisterPetshop from "../core/useCase/Petshop/RegisterPetshop";
import Petshop from "../core/model/Petshop";
import BuscarPets from "../core/useCase/pets/BuscarPets";

export default class PetshopController {
  static async inserir(req: Request, res: Response): Promise<Response| any> {
    try {
      const petShop:Petshop = req.petshop
      const ObjPetshop = {
        id: Id.gerar(),
        name: petShop.name,
        cnpj: petShop.cnpj,
        pets: petShop.pets,
      };
      
      const registrarPetshop = new RegisterPetshop(new PetshopRepository());
      const novoPetshop = await registrarPetshop.executar(ObjPetshop);
     
        res.status(201).json(novoPetshop);

    
     
    } catch (error) {
      res.status(404).json({erro: "Erro desconhecido"})
    }
  }
  static async buscarPets(req: Request, res: Response):Promise<Response| any>{
        try {
          const petShop:Petshop = req.petshop
          const cnpj = petShop.cnpj
          const buscarNoPetshop = new BuscarPets(new PetshopRepository() )
          const arrayDePets = buscarNoPetshop.buscar(cnpj)
          if(arrayDePets){
            res.status(200).json(arrayDePets)
          }
          else{
            res.status(404).send("Não existe pets")
          }
        } catch (error) {
          res.status(404).json({erro: "Erro desconhecido"})
        }
  }
}
