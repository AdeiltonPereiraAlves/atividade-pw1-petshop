import { Request, Response } from "express";
import Petshop from "../core/model/Petshop";
import Pet from "../core/model/Pet";
import EditPet from "../core/useCase/pets/EditPet";
import PetshopRepository from "../adapters/db/PetshopRepository";

export default class EditPetController {
  static async edit(req: Request, res: Response): Promise<any> {
    try {
      const petShop: Petshop = req.petshop;
      const { id } = req.params;
     

      if (!petShop || !petShop.cnpj) {
        res.status(400).json({ error: "Petshop não informado ou inválido." });
        return;
      }

      if (!id) {
        res.status(400).json({ error: "ID do pet não informado." });
        return;
      }
      const petEdit: Pet = {
        id,
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        vaccinated: req.body.vaccinated || false,
        deadline_vaccination: req.body.deadline_vaccination,
      };
      

      const editPetNow = new EditPet(new PetshopRepository());
      const petEdited: Pet | any = editPetNow.edit(petShop.cnpj, petEdit);

      
      if (!petEdited) {
        res
          .status(404)
          .json({ error: "Pet não encontrado ou não foi possível editar." });
        return;
      }
      res.status(200).json(petEdited);
    } catch (error: any) {
      console.error("Erro no controlador de edição de pets:", error.message);
      res.status(404).json({ erro: "Erro desconhecido" });
    }
  }
}
