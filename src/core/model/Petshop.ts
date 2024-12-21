import Pet from "./Pet"

export default interface Petshop{
    id?:string
    name: string
    cnpj: string
    pets:Pet[] 
}