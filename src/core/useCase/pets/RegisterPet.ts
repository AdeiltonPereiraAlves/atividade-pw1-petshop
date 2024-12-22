import Pet from "../../model/Pet";
import PetshopPort from "../../ports/PetshopPort";

export default class RegisterPet{
    constructor(private petsDB:PetshopPort){}
    register(cnpj: string, pet: Pet){
        return this.petsDB.insertPet(cnpj, pet)
    }
}