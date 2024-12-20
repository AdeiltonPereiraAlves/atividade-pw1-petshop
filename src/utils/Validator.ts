export default class Validador{
    static validarCnpj(cnpj: string):boolean{
        const regex: RegExp = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/
        return regex.test(cnpj)

    }
}