import { Router } from "express";
import buscarPetsNoPetshop  from "../controllers/SeachPetsController"
import { checkExistsUserAccount } from "../middleware/checkExistsUserAccount";
import  insertPet from "../controllers/InsertPetController"
const router = Router()                                                            
router.get("/pets",checkExistsUserAccount, buscarPetsNoPetshop.buscarPets )
router.post("/pets", checkExistsUserAccount,insertPet.inserir )

export default router