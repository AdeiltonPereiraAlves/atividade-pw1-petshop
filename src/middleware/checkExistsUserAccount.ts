import { NextFunction, Request, Response } from "express";
import Validador from "../core/utils/Validator";
declare global {
  namespace Express {
    interface Request {
      petshop?: any; // Adiciona 'authUser' como propriedade opcional
    }
  }
}
async function checkExistsUserAccount(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const cnpj = req.headers["cnpj"] as string;
    console.log(typeof cnpj)
    const { name, pets } = req.body as any;
    const novoPetshop = {
      name,
      cnpj,
      pets,
    };
    console.log(novoPetshop)
    if (await Validador.existsPetshop(cnpj)) {
      return res.status(403).json({ mensagem: "Acesso negado: CNPJ já existe" });
    }
    req.petshop = novoPetshop;
    next();
  } catch (error) {
    return res.status(403).json({ mensagem: "Erro interno do servidor" });
  }
}
export {checkExistsUserAccount}
