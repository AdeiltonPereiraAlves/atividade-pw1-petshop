import Pet from "../model/Pet";
import Petshop from "../model/Petshop";

export default interface PetshopRepository {
  inserir(petshop: Petshop): Petshop | true;
  buscarPet(cnpj: string,id: string): Pet | null;
  buscarPets(petshop: Petshop): Pet[] |null;
  editarPet(cnpj:string,pet: Pet): void;
  buscarPetshop(cnpj: string): Petshop
  inserirPet(cnpj: string, pet: Pet):void
}
