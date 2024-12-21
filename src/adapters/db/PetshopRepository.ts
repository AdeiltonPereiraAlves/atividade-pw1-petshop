import { equal } from "assert";
import Petshop from "../../core/model/Petshop";
import PetshopPort from "../../core/ports/PetshopPort";
import arrayPetshop from "./ArrayPetshop";

export default class PetshopRepository implements PetshopPort {

   

  inserir(petshop: Petshop): Petshop | true {
    try {
         
      if(this.comparar(petshop.cnpj)){
           return true
       }
    
   
    arrayPetshop.push(petshop);
    console.log(arrayPetshop)
      return petshop;
    } catch (error) {
      throw new Error("Erro ao enserir petshop no banco");
    }
  }
  comparar(cnpj: string) {
    const equals = arrayPetshop.some((petshop) => petshop.cnpj === cnpj);
    console.log(arrayPetshop)
    return equals;
  }
}
