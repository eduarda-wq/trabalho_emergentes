import { PrismaClient, Sabor, Tamanho } from '@prisma/client'
import { Router } from 'express'
import { z } from 'zod'

const prisma = new PrismaClient()
const router = Router()

// Validação dos dados de bolo
const boloSchema = z.object({
  nome: z.string().min(2, { message: "Nome do bolo deve ter pelo menos 2 caracteres" }),
  descricao: z.string().nullable().optional(),
  preco: z.number().positive(),
  pesoKg: z.number().positive(),
  foto: z.string().url({ message: "Foto deve ser uma URL válida" }),
  sabor: z.nativeEnum(Sabor).optional(),
  tamanho: z.nativeEnum(Tamanho).optional(),
  destaque: z.boolean().optional(),
  categoriaId: z.number(),
})

// Listar todos os bolos
router.get("/", async (req, res) => {
  try {
    const bolos = await prisma.bolo.findMany({
      include: {
        categoria: true,
      }
    })
    res.status(200).json(bolos)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

// Criar um novo bolo
router.post("/", async (req, res) => {
  const valida = boloSchema.safeParse(req.body)
  if (!valida.success) {
    res.status(400).json({ erro: valida.error })
    return
  }

  const { nome, descricao = null, preco, pesoKg, foto,
    sabor = 'CHOCOLATE', tamanho = 'MEDIO',
    destaque = false, categoriaId } = valida.data

  try {
    const bolo = await prisma.bolo.create({
      data: { nome, descricao, preco, pesoKg, foto, sabor, tamanho, destaque, categoriaId }
    })
    res.status(201).json(bolo)
  } catch (error) {
    res.status(400).json({ error })
  }
})

// Deletar bolo
router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const bolo = await prisma.bolo.delete({
      where: { id: Number(id) }
    })
    res.status(200).json(bolo)
  } catch (error) {
    res.status(400).json({ erro: error })
  }
})

// Atualizar bolo
router.put("/:id", async (req, res) => {
  const { id } = req.params

  const valida = boloSchema.safeParse(req.body)
  if (!valida.success) {
    res.status(400).json({ erro: valida.error })
    return
  }

  const { nome, descricao, preco, pesoKg, foto, sabor, tamanho, destaque, categoriaId } = valida.data

  try {
    const bolo = await prisma.bolo.update({
      where: { id: Number(id) },
      data: { nome, descricao, preco, pesoKg, foto, sabor, tamanho, destaque, categoriaId }
    })
    res.status(200).json(bolo)
  } catch (error) {
    res.status(400).json({ error })
  }
})

// Pesquisa por nome, categoria, sabor ou preço
router.get("/pesquisa/:termo", async (req, res) => {
  const { termo } = req.params
  const termoNumero = Number(termo)

  if (isNaN(termoNumero)) {
    try {
      const bolos = await prisma.bolo.findMany({
        include: { categoria: true },
        where: {
          OR: [
            { nome: { contains: termo, mode: "insensitive" } },
            { categoria: { nome: { contains: termo, mode: "insensitive" } } },
            { sabor: { equals: termo.toUpperCase() as Sabor } }
          ]
        }
      })
      res.status(200).json(bolos)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  } else {
    try {
      const bolos = await prisma.bolo.findMany({
        include: { categoria: true },
        where: { preco: { lte: termoNumero } }
      })
      res.status(200).json(bolos)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  }
})

export default router
