import { Router } from "express";
import petshopController from '../controllers/InsertPetshopController'
import {checkExistsUserAccount} from "../middleware/checkExistsUserAccount";
const router = Router()
router.post("/petshops", petshopController.inserir)

export default router