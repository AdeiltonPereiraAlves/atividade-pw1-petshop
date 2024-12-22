import Pet from "../model/Pet"
import Petshop from "../model/Petshop";

export default interface PetsPort{
       seachPet(cnpj: string, id: string): Pet | null;
       seachPets(petshop: Petshop): Pet[] | null;
       editPet(cnpj: string, pet: Pet): void;
       insertPet(cnpj: string, pet: Pet): void;
       alterVaccinated(cnpj: string,id: string): Pet;
       deletePet(cnpj:string, id: string): Pet[]
}