import Petshop from "../model/Petshop";

export default interface PetshopRepository{
    inserir (petshop: Petshop):Petshop
}