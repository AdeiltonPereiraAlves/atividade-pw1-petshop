import Pet from "../../model/Pet";
import PetshopPort from "../../ports/PetshopPort";

export default class EditPet{
    constructor(private petDB: PetshopPort){}
    edit(cnpj:string, pet:Pet){
        return this.petDB.editPet(cnpj, pet)
    }
}