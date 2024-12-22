import PetshopPort from "../../ports/PetshopPort";

export default class AlterVaccinated {
  constructor(private petshopDb: PetshopPort) {}

  alter(cnpj: string, id: string) {
    return this.petshopDb.alterVaccinated(cnpj, id);
  }
}
