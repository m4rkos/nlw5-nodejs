import express from "express"
import "./database"

import { routes } from "./routes"

const app = express()

app.use(express.json())

app.use(routes)

/**
 * GET = Busca
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica
 */

app.listen(3033, () => console.log("Server is runnig on port 3033"))