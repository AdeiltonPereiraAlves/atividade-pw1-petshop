import Pet from "../model/Pet";
import Petshop from "../model/Petshop";

export default interface PetshopRepository {
  inserir(petshop: Petshop): Petshop | true;
  buscarPet(id: string): Pet | null;
  buscarPets(petshop: Petshop): Pet[] |null;
  editarPet(pet: Pet): void;
  buscarPetshop(cnpj: string): Petshop
  inserirPet(cnpj: string, pet: Pet):void
}
