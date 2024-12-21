import Pet from "../../core/model/Pet";
import Petshop from "../../core/model/Petshop";
import PetshopPort from "../../core/ports/PetshopPort";
import arrayPetshop from "./ArrayPetshop";

export default class PetshopRepository implements PetshopPort {
  buscarPetshop(cnpj: string): Petshop | any {
    try {
      const novoPetshop = arrayPetshop.find((petshop) => petshop.cnpj === cnpj);
      return novoPetshop;
    } catch (error) {
      throw new Error("Petshop não encontrado.");
    }
  }
  buscarPet(cnpj: string, id: string): Pet {
    console.log(cnpj, "cnpj", id, "id");
    const petshop: Petshop = this.buscarPetshop(cnpj);
    const pets: Pet[] = this.buscarPets(petshop);
    if (!pets || pets.length === 0) {
      throw new Error("Nenhum pet encontrado para este petshop.");
    }
    console.log(petshop, "Petshop no buscarpet");

    console.log(pets, "array de pets");

    const pet = pets.find((pet: Pet) => pet.id === id); // o bug ta aqui  para corrigir
    console.log(pet, "buscar pet");
    if (!pet) {
      throw new Error("Pet não exite");
    }
    console.log(pet, "Pet encontrado");
    return pet;
  }

  buscarPets(petshop: Petshop): Pet[] {
    try {
      const petsFilter: Petshop = this.buscarPetshop(petshop.cnpj);
      return petsFilter.pets;
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
  editarPet(cnpj: string, pet: Pet): any {
    console.log(pet, "banco");
    const id: string = pet.id as any;
    console.log(pet.id, "id do pet");
    const petShopReceveid: Petshop = this.buscarPetshop(cnpj); // aqui olhar tbm o bug

    if (!petShopReceveid) {
      return new Error("Pet nâo existe");
    }
    const petIndex = petShopReceveid.pets.findIndex((p) => p.id === id);
    console.log(petIndex, "indice");
    if (petIndex === -1) {
      throw new Error("Pet não encontrado.");
    }

    petShopReceveid.pets[petIndex] = pet;

    return petShopReceveid.pets[petIndex];
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
  inserirPet(cnpj: string, pet: Pet) {
    try {
      const petshop: Petshop = this.buscarPetshop(cnpj);
      if (!petshop) {
        throw new Error("Petshop não encontrado.");
      }
      petshop.pets.push(pet);
      return pet;
    } catch (error) {
      throw new Error("Erro ao enserir pet no banco");
    }
  }
}
