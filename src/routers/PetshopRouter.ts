import { Router } from "express";
import petshopController from '../controllers/PetshopController'
import {checkExistsUserAccount} from "../middleware/checkExistsUserAccount";
const router = Router()
router.post("/petshops",checkExistsUserAccount, petshopController.inserir)

export default router