import { Request, Response } from "express";
import Petshop from "../core/model/Petshop";
import Validador from "../utils/Validator";
import DeletePet from "../core/useCase/pets/DeletePet";
import PetshopRepository from "../adapters/db/PetshopRepository";



export default class DeletePetController{
     static async delete(req: Request, res:Response){
        try {
            const petShop: Petshop  = req.petshop
            const {id} =req.params
            const isId = Validador.validateId(id)
            if(!isId){
                 res.status(404).json({erro: "id inválido"})
                 return
            }
            if(!petShop){
                res.status(404).json({erro: "petshop inválido"})
                return
            }
            const deletePet = new DeletePet(new PetshopRepository())
            const arrayPets = deletePet.delete(petShop.cnpj, id)
            if(!arrayPets){
                res.status(404).json({erro: "array de pets inválido"})
            }
            res.status(200).json(arrayPets)
        } catch (error) {
            res.status(404).json({erro: "Erro ao deletar pet"})
        }
     } 
}