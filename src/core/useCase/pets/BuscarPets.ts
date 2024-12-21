import PetshopPort from "../../ports/PetshopPort";

export default class BuscarPets{
    constructor(private petshopDb: PetshopPort ){}

    buscar(cnpj:string){
        return this.petshopDb.buscarPets(cnpj);
    }
}