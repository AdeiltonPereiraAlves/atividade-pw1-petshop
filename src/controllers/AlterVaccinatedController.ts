import { Request, Response } from "express";
import Petshop from "../core/model/Petshop";
import AlterVaccinated from "../core/useCase/pets/AlterVaccinated";
import PetshopRepository from "../adapters/db/PetshopRepository";
import Validador from "../utils/Validator";
import Pet from "../core/model/Pet";

export default class AlterVaccinatedController {
  static async Alter(req: Request, res: Response):Promise<Pet | any> {
    try {
      const petShop: Petshop = req.petshop;
      const { id } = req.params;
      const isId = Validador.validateId(id);
      if (!isId) {
        res.status(404).json({ erro: "Id inválido" });
        return;
      }
      if (!petShop) {
        res.status(404).json({ erro: "Pethop não existe" });
        return;
      }
      const AlterVaccinatedNow = new AlterVaccinated(new PetshopRepository());
      const isVaccinated = AlterVaccinatedNow.alter(petShop.cnpj, id);

      if (!isVaccinated) {
        res.status(404).json({ erro: "Pet Não existe" });
        return;
      }
      res.status(200).json(isVaccinated);
    } catch (error: any) {
      console.error("Erro na edião de vacinação do pets:", error.message);
      return res
        .status(404)
        .json({ erro: "Erro desconhecido no alter vacinated" });
    }
  }
}
