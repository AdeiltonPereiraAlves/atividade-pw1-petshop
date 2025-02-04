import Petshop from "../core/model/Petshop";
import { Request, Response } from "express";
import RegisterPet from "../core/useCase/pets/RegisterPet";
import PetshopRepository from "../adapters/db/PetshopRepository";
import Pet from "../core/model/Pet";
import Id from "../core/shared/Id";
export default class InsertPetController {
  static insert(req: Request, res: Response){
    try {
      const petShop: Petshop = req.petshop;
      const cnpj:string = petShop.cnpj;
      const pet: Pet = {
        id: Id.gerar(),
        name: req.body.name,
        type: req.body.type,
        description: req.body.desciption,
        vaccinated: false,
        deadline_vaccination: new Date(req.body.deadline_vaccination),
        created_at: new Date(),
      };

      const RegisterPetNow:RegisterPet = new RegisterPet(new PetshopRepository());
      const petCreated: Pet = RegisterPetNow.register(cnpj, pet);
      if (!petCreated) {
        res.status(404).json({ error: "Pet não criado." });
        return;
      }
      res.status(201).json(petCreated);
    } catch (erro) {
      res.status(404).json({ erro: "Erro desconhecido" });
    }
  }
}
