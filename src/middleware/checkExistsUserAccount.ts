import { NextFunction, Request, Response } from "express";
import Validador from "../core/utils/Validator";
import PetshopRepository from "../adapters/db/PetshopRepository";
import arrayPetshop from "../adapters/db/ArrayPetshop";
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
): Promise<NextFunction | any> {
  try {
    const cnpj = req.headers["cnpj"] as string;

    const exists = await Validador.existsPetshop(cnpj);
    if (exists) {
      // const novoPetshop = arrayPetshop.find((petshop) => petshop.cnpj === cnpj);
      const exitsPetshop = new PetshopRepository()
      const novoPetshop = exitsPetshop.buscarPetshop(cnpj)
      req.petshop = novoPetshop;
      console.log(novoPetshop);

      next();
    } else {
      res.status(404).json({ erro: "Cnpj não encontrado" });
    }
  } catch (error) {
    return res.status(403).json({ mensagem: "Erro interno do servidor" });
  }
}
export { checkExistsUserAccount };
