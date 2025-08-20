import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import { z } from 'zod'

const prisma = new PrismaClient()
const router = Router()

// Validação
const categoriaSchema = z.object({
  nome: z.string().min(3, { message: "Nome deve possuir no mínimo 3 caracteres" })
})

// Listar todas as categorias
router.get("/", async (req, res) => {
  try {
    const categorias = await prisma.categoria.findMany({
      include: { bolos: true }
    })
    res.status(200).json(categorias)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

// Criar categoria
router.post("/", async (req, res) => {
  const valida = categoriaSchema.safeParse(req.body)
  if (!valida.success) {
    res.status(400).json({ erro: valida.error })
    return
  }

  const { nome } = valida.data

  try {
    const categoria = await prisma.categoria.create({
      data: { nome }
    })
    res.status(201).json(categoria)
  } catch (error) {
    res.status(400).json({ error })
  }
})

// Deletar categoria
router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const categoria = await prisma.categoria.delete({
      where: { id: Number(id) }
    })
    res.status(200).json(categoria)
  } catch (error) {
    res.status(400).json({ erro: error })
  }
})

// Atualizar categoria
router.put("/:id", async (req, res) => {
  const { id } = req.params

  const valida = categoriaSchema.safeParse(req.body)
  if (!valida.success) {
    res.status(400).json({ erro: valida.error })
    return
  }

  const { nome } = valida.data

  try {
    const categoria = await prisma.categoria.update({
      where: { id: Number(id) },
      data: { nome }
    })
    res.status(200).json(categoria)
  } catch (error) {
    res.status(400).json({ error })
  }
})

export default router
