import Pet from "../model/Pet"
import Petshop from "../model/Petshop";

export default interface PetsPort{
       seachPet(cnpj: string, id: string): Pet| any;
       seachPets(petshop: Petshop): Pet[] | null;
       editPet(cnpj: string, pet: Pet): Pet;
       insertPet(cnpj: string, pet: Pet): Pet;
       alterVaccinated(cnpj: string,id: string): Pet ;
       deletePet(cnpj:string, id: string): Pet[];
}