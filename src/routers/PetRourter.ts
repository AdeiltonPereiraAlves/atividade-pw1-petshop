import { Router } from "express";
import buscarPetsNoPetshop  from "../controllers/BuscarPetsController"
import { checkExistsUserAccount } from "../middleware/checkExistsUserAccount";
const router = Router()
router.get("/pets",checkExistsUserAccount, buscarPetsNoPetshop.buscarPets )


export default router