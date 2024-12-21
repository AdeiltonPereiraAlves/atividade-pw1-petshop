import arrayPetshop from "../../adapters/db/ArrayPetshop"

export default class Validador{
    static validarCnpj(cnpj: string):boolean{
        const regex: RegExp = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/
        return regex.test(cnpj)

    }
    static async existsPetshop(cnpj:string){
        const equals = arrayPetshop.some((petshop) => petshop.cnpj === cnpj);
     
        return equals;
    }
}