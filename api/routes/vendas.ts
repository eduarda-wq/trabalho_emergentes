import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import { z } from 'zod'

const prisma = new PrismaClient()
const router = Router()

const vendaSchema = z.object({
  clienteId: z.number().int(),
  funcionarioId: z.number().int(),
  valor: z.number().positive({ message: "O valor deve ser positivo" }),
  data: z.string().datetime({ message: "Data inválida" }),
  quantidade: z.number().int().positive({ message: "A quantidade deve ser positiva" }),
  valorTotal: z.number().positive({ message: "O valor total deve ser positivo" }),
  boloId: z.number().int(),
})

router.get("/", async (req, res) => {
  try {
    const vendas = await prisma.venda.findMany({
      include: { cliente: true, funcionario: true },
    })
    res.status(200).json(vendas)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

router.post("/", async (req, res) => {
  const valida = vendaSchema.safeParse(req.body)
  if (!valida.success) {
    return res.status(400).json({ erro: valida.error })
  }
  try {
    const venda = await prisma.venda.create({
      data: {
        clienteId: valida.data.clienteId,
        funcionarioId: valida.data.funcionarioId,
        dataVenda: valida.data.data,
        quantidade: valida.data.quantidade,
        valorTotal: valida.data.valorTotal,
        boloId: valida.data.boloId,
      },
    })
    res.status(201).json(venda)
  } catch (error) {
    res.status(400).json({ erro: error })
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const venda = await prisma.venda.delete({
      where: { id: Number(id) },
    })
    res.status(200).json(venda)
  } catch (error) {
    res.status(400).json({ erro: error })
  }
})

export default router
