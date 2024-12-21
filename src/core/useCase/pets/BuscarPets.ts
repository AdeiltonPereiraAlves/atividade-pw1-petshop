import Petshop from "../../model/Petshop";
import PetshopPort from "../../ports/PetshopPort";

export default class BuscarPets{
    constructor(private petshopDb: PetshopPort ){}

    buscar(petshop: Petshop){
        return this.petshopDb.buscarPets(petshop);
    }
}