import Petshop from "../../core/model/Petshop";
import PetshopPort from "../../core/ports/PetshopPort";

export default class PetshopRepository implements PetshopPort{
    private arrayPetshop:Petshop[] = []
    inserir(petshop: Petshop):Petshop {
        try {
            this.arrayPetshop.push(petshop)
            return petshop
        } catch (error) {
            
            throw new Error("Erro ao enserir petshop no banco");
        }
    }

}