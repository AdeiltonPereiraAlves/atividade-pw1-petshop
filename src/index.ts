import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
const port = process.env.PORT
import petshopRouter from "../src/routers/PetshopRouter"
import petRoter from "./routers/PetRourter"
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use("/", petshopRouter)
app.use("/",petRoter )


app.listen(4000,() => {
    console.log("Servidor Rodando")
})
