import { Router } from "express"
import { PrismaClient } from "@prisma/client"
import { autenticar } from "../middleware/auth"

const prisma = new PrismaClient()
const router = Router()

router.use(autenticar)

router.get("/", async (req, res) => {
  const vendas = await prisma.venda.findMany({
    include: { cliente: true, funcionario: true, bolo: true }
  })
  res.json(vendas)
})

export default router
