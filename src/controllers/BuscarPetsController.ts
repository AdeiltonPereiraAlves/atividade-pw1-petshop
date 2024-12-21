import PetshopRepository from "../adapters/db/PetshopRepository"
import Petshop from "../core/model/Petshop"
import BuscarPets from "../core/useCase/pets/BuscarPets"
import { Response, Request } from "express";
export default class BuscarPetsController{
    static async buscarPets(req: Request, res: Response):Promise<Response| any>{
        try {
          const petShop:Petshop = req.petshop
          const cnpj = petShop.cnpj
          const buscarNoPetshop = new BuscarPets(new PetshopRepository() )
          const arrayDePets = buscarNoPetshop.buscar(petShop)
          if(arrayDePets){
            res.status(200).json(arrayDePets)
          }
          else{
            res.status(404).json("Não existe pets")
          }
        } catch (error) {
          res.status(404).json({erro: "Erro desconhecido"})
        }
  }
}