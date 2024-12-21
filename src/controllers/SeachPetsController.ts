import PetshopRepository from "../adapters/db/PetshopRepository"
import Petshop from "../core/model/Petshop"
import BuscarPets from "../core/useCase/pets/SearchPets"
import { Response, Request } from "express";
export default class BuscarPetsController{
    static async buscarPets(req: Request, res: Response):Promise<Response| any>{
        try {
          const petShop:Petshop = req.petshop
          const cnpj = petShop.cnpj
          const seachPetshop = new BuscarPets(new PetshopRepository() )
          const arrayPets = seachPetshop.seach(petShop)
          if(arrayPets){
            res.status(200).json(arrayPets)
          }
          else{
            res.status(404).json("Não existe pets")
          }
        } catch (error) {
          res.status(404).json({erro: "Erro desconhecido"})
        }
  }
}