import { Router } from "express";
import buscarPetsNoPetshop  from "../controllers/PetshopController"
import { checkExistsUserAccount } from "../middleware/checkExistsUserAccount";
const router = Router()

router.get("/pets",checkExistsUserAccount, buscarPetsNoPetshop.buscarPets )

export default router