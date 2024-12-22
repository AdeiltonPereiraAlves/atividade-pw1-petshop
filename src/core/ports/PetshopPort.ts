import Pet from "../model/Pet";
import Petshop from "../model/Petshop";
import PetsPort from "./PetsPort";

export default interface PetshopRepository extends PetsPort {
  insert(petshop: Petshop): Petshop | true;
  seachPetshop(cnpj: string): Petshop;
  
}
