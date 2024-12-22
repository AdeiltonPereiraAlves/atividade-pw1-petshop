import { Router } from "express";
import buscarPetsNoPetshop from "../controllers/SeachPetsController";
import { checkExistsUserAccount } from "../middleware/checkExistsUserAccount";
import insertPet from "../controllers/InsertPetController";
import editPet from "../controllers/EditPetController";
import alterVaccinated from "../controllers/AlterVaccinatedController";
const router = Router();
router.get("/pets", checkExistsUserAccount, buscarPetsNoPetshop.seachPets);
router.post("/pets", checkExistsUserAccount, insertPet.insert);
router.put("/pets/:id", checkExistsUserAccount, editPet.edit);
router.patch("/pets/:id", checkExistsUserAccount, alterVaccinated.Alter);

export default router;
