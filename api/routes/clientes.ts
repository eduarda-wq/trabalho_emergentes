import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import { z } from 'zod'

const prisma = new PrismaClient()
const router = Router()

// Validação dos dados do cliente
const clienteSchema = z.object({
  nome: z.string().min(3, { message: "Nome deve possuir, no mínimo, 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  telefone: z.string().nullable().optional(),
  endereco: z.string().nullable().optional()
})

// Listar todos os clientes
router.get("/", async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany({
      include: { vendas: true }
    })
    res.status(200).json(clientes)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

// Criar cliente
router.post("/", async (req, res) => {
  const valida = clienteSchema.safeParse(req.body)
  if (!valida.success) {
    res.status(400).json({ erro: valida.error })
    return
  }

  const { nome, email, telefone = null, endereco = null } = valida.data

  try {
    const cliente = await prisma.cliente.create({
      data: { nome, email, telefone, endereco }
    })
    res.status(201).json(cliente)
  } catch (error) {
    res.status(400).json({ error })
  }
})

// Deletar cliente
router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const cliente = await prisma.cliente.delete({
      where: { id: Number(id) }
    })
    res.status(200).json(cliente)
  } catch (error) {
    res.status(400).json({ erro: error })
  }
})

// Atualizar cliente
router.put("/:id", async (req, res) => {
  const { id } = req.params

  const valida = clienteSchema.safeParse(req.body)
  if (!valida.success) {
    res.status(400).json({ erro: valida.error })
    return
  }

  const { nome, email, telefone, endereco } = valida.data

  try {
    const cliente = await prisma.cliente.update({
      where: { id: Number(id) },
      data: { nome, email, telefone, endereco }
    })
    res.status(200).json(cliente)
  } catch (error) {
    res.status(400).json({ error })
  }
})

export default router
