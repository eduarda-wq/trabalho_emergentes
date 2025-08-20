import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import { z } from 'zod'

const prisma = new PrismaClient()
const router = Router()

// Validação dos dados do funcionário
const funcionarioSchema = z.object({
  nome: z.string().min(3, { message: "Nome deve possuir no mínimo 3 caracteres" }),
  cargo: z.string().min(2, { message: "Cargo deve possuir no mínimo 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  telefone: z.string().nullable().optional()
})

// Listar todos os funcionários
router.get("/", async (req, res) => {
  try {
    const funcionarios = await prisma.funcionario.findMany({
      include: { vendas: true }
    })
    res.status(200).json(funcionarios)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

// Criar funcionário
router.post("/", async (req, res) => {
  const valida = funcionarioSchema.safeParse(req.body)
  if (!valida.success) {
    res.status(400).json({ erro: valida.error })
    return
  }

  const { nome, cargo, email, telefone = null } = valida.data

  try {
    const funcionario = await prisma.funcionario.create({
      data: { nome, cargo, email, telefone }
    })
    res.status(201).json(funcionario)
  } catch (error) {
    res.status(400).json({ error })
  }
})

// Deletar funcionário
router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const funcionario = await prisma.funcionario.delete({
      where: { id: Number(id) }
    })
    res.status(200).json(funcionario)
  } catch (error) {
    res.status(400).json({ erro: error })
  }
})

// Atualizar funcionário
router.put("/:id", async (req, res) => {
  const { id } = req.params

  const valida = funcionarioSchema.safeParse(req.body)
  if (!valida.success) {
    res.status(400).json({ erro: valida.error })
    return
  }

  const { nome, cargo, email, telefone } = valida.data

  try {
    const funcionario = await prisma.funcionario.update({
      where: { id: Number(id) },
      data: { nome, cargo, email, telefone }
    })
    res.status(200).json(funcionario)
  } catch (error) {
    res.status(400).json({ error })
  }
})

export default router
