import PetshopRepository from "../adapters/db/PetshopRepository";
import Pet from "../core/model/Pet";
import Petshop from "../core/model/Petshop";
import seachPets from "../core/useCase/pets/SearchPets";
import { Response, Request } from "express";
export default class BuscarPetsController {
  static async seachPets(req: Request, res: Response): Promise<Response | any> {
    try {
      const petShop: Petshop = req.petshop;

      const seachPetshop = new seachPets(new PetshopRepository());
      const arrayPets: Pet[] | null = seachPetshop.seach(petShop);
      if (arrayPets) {
        res.status(200).json(arrayPets);
      } else {
        res.status(404).json("Não existe pets");
      }
    } catch (error) {
      res.status(404).json({ erro: "Erro desconhecido" });
    }
  }
}
