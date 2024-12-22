import arrayPetshop from "../../adapters/db/ArrayPetshop";

export default class Validador {
  static validateCnpj(cnpj: string): boolean {
    const regex: RegExp = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    return regex.test(cnpj);
  }
  static existsPetshop(cnpj: string):boolean{
    const equals: boolean = arrayPetshop.some(
      (petshop) => petshop.cnpj === cnpj
    );

    return equals;
  }
}
