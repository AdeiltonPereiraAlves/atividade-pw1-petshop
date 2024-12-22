import Petshop from "../../model/Petshop";
import PetshopPort from "../../ports/PetshopPort";

export default class SeachPets{
    constructor(private petshopDb: PetshopPort ){}

    seach(petshop: Petshop){
        return this.petshopDb.seachPets(petshop);
    }
}