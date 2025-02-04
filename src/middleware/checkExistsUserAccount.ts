import { NextFunction, Request, Response } from "express";
import Validador from "../utils/Validator";
import PetshopRepository from "../adapters/db/PetshopRepository";

declare global {
  namespace Express {
    interface Request {
      petshop?: any;
    }
  }
}
async function checkExistsUserAccount(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void > {
  try {
    const cnpj = req.headers["cnpj"] as string;

    const exists =  Validador.existsPetshop(cnpj);
    if (exists) {
      // const novoPetshop = arrayPetshop.find((petshop) => petshop.cnpj === cnpj);
      const exitsPetshop = new PetshopRepository()
      const newPetshop = exitsPetshop.seachPetshop(cnpj)
      req.petshop = newPetshop;
     

      next();
    } else {
      res.status(404).json({ error: "Cnpj não encontrado" });
    }
  } catch (error) {
    res.status(403).json({ mensagem: "Erro interno do servidor" });
  }
}
export { checkExistsUserAccount };
