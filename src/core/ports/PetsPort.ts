import Pet from "../model/Pet"

export default interface PetsPort{
     inserir():void
     buscarPet(id:string): Pet | null
     buscarPets():Pet[]| null
     editarPet(pet: Pet): void 
}