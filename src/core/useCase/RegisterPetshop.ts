import Petshop from "../model/Petshop";
import PetshopPort from "../ports/PetshopPort";

export default class RegisterPetshop{
    constructor(private petshopDb: PetshopPort){

    }
    executar(petshop: Petshop){
        this.petshopDb.inserir(petshop)
    }

}