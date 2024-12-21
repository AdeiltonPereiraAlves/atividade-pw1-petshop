import { Router } from "express";
import petshopController from '../controllers/inserirPetshopController'
import {checkExistsUserAccount} from "../middleware/checkExistsUserAccount";
const router = Router()
router.post("/petshops", petshopController.inserir)

export default router