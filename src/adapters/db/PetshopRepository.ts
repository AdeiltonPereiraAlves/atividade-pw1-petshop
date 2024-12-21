import Pet from "../../core/model/Pet";
import Petshop from "../../core/model/Petshop";
import PetshopPort from "../../core/ports/PetshopPort";
import arrayPetshop from "./ArrayPetshop";

export default class PetshopRepository implements PetshopPort {
  buscarPetshop(cnpj: string): Petshop | any {
    try {
      const novoPetshop = arrayPetshop.find((petshop) => petshop.cnpj === cnpj)
       return novoPetshop
    } catch (error) {
      
      throw new Error("Method not implemented.");
    }
  }
  buscarPet(id: string): Pet | null {
    throw new Error("Method not implemented.");
  }
  buscarPets(petshop:Petshop): any {
    try {
       const petsFilter: Petshop =  this.buscarPetshop(petshop.cnpj)
       return  petsFilter.pets
    } catch (error) {
      
      throw new Error("Method not implemented.");
    }
  }
  editarPet(pet: Pet): void {
    throw new Error("Method not implemented.");
  }

  inserir(petshop: Petshop): Petshop | true {
    try {
      arrayPetshop.push(petshop);
      console.log(arrayPetshop);
      return petshop;
    } catch (error) {
      throw new Error("Erro ao enserir petshop no banco");
    }
  }
}
