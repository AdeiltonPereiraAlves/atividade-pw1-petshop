import PetshopPort from "../../ports/PetshopPort";

export default class DeletePet{
    constructor(private petshopDb: PetshopPort){}
    delete(cnpj:string, id:string){
          return this.petshopDb.deletePet(cnpj, id)
    }
}