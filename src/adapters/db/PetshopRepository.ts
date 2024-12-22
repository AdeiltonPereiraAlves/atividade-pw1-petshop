import Pet from "../../core/model/Pet";
import Petshop from "../../core/model/Petshop";
import PetshopPort from "../../core/ports/PetshopPort";
import PetsPort from "../../core/ports/PetsPort";
import arrayPetshop from "./ArrayPetshop";

export default class PetshopRepository implements PetshopPort, PetsPort {
  seachPetshop(cnpj: string): Petshop | any {
    try {
      const newPetshop = arrayPetshop.find((petshop) => petshop.cnpj === cnpj);
      return newPetshop;
    } catch (error) {
      throw new Error("Petshop não encontrado.");
    }
  }
  seachPet(cnpj: string, id: string): Pet {
    const petshop: Petshop = this.seachPetshop(cnpj);
    const pets: Pet[] = this.seachPets(petshop);
    if (!pets || pets.length === 0) {
      throw new Error("Nenhum pet encontrado para este petshop.");
    }

    const pet = pets.find((pet: Pet) => pet.id === id); // o bug ta aqui  para corrigir

    if (!pet) {
      throw new Error("Pet não exite");
    }

    return pet;
  }

  seachPets(petshop: Petshop): Pet[] {
    try {
      const petsFilter: Petshop = this.seachPetshop(petshop.cnpj);
      return petsFilter.pets;
    } catch (error) {
      throw new Error("Erro ao retornar pets");
    }
  }
  editPet(cnpj: string, pet: Pet): any {
    const id: string = pet.id as any;

    const petShopReceveid: Petshop = this.seachPetshop(cnpj); // aqui olhar tbm o bug

    if (!petShopReceveid) {
      return new Error("Pet nâo existe");
    }
    const petIndex = petShopReceveid.pets.findIndex((p) => p.id === id);

    if (petIndex === -1) {
      throw new Error("Pet não encontrado.");
    }

    petShopReceveid.pets[petIndex] = pet;

    return petShopReceveid.pets[petIndex];
  }

  insert(petshop: Petshop): Petshop | true {
    try {
       arrayPetshop.push(petshop);
    
      return petshop;
    } catch (error) {
      throw new Error("Erro ao enserir petshop no banco");
    }
  }
  insertPet(cnpj: string, pet: Pet) {
    try {
      const petshop: Petshop = this.seachPetshop(cnpj);
      if (!petshop) {
        throw new Error("Petshop não encontrado.");
      }
      petshop.pets.push(pet);
      return pet;
    } catch (error) {
      throw new Error("Erro ao enserir pet no banco");
    }
  }
  alterVaccinated(cnpj: string, id: string) {
    const pet: Pet = this.seachPet(cnpj, id);
    pet.vaccinated = true;
    return pet;
  }
  deletePet(cnpj: string, id: string): Pet[] {
    const petShop: Petshop = this.seachPetshop(cnpj);
    const newArrayPets = petShop.pets.filter((pet) => pet.id !== id);
    return newArrayPets;
  }
}
