import { Router } from "express";
import buscarPetsNoPetshop  from "../controllers/SeachPetsController"
import { checkExistsUserAccount } from "../middleware/checkExistsUserAccount";
import  insertPet from "../controllers/InsertPetController"
import editPet from "../controllers/EditPetController"
const router = Router()                                                            
router.get("/pets",checkExistsUserAccount, buscarPetsNoPetshop.buscarPets )
router.post("/pets", checkExistsUserAccount,insertPet.inserir )
router.put("/pets/:id", checkExistsUserAccount,editPet.edit )

export default router