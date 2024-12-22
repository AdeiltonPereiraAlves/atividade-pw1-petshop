import Petshop from "../../model/Petshop";
import PetshopPort from "../../ports/PetshopPort";

export default class RegisterPetshop{
    constructor(private petshopDb: PetshopPort){

    }
    execute(petshop: Petshop){
       return this.petshopDb.insert(petshop)
    }

}