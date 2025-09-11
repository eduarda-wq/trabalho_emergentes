// routes/bolo.ts
import { Router } from "express";
import { createBoloSchema } from "../schemas/boloSchema";
import prisma from "../prisma";

const boloRouter = Router();

// ================== BOLOS ==================

// Listar todos os bolos
boloRouter.get("/", async (req, res) => {
  const bolos = await prisma.bolo.findMany({ include: { categoria: true } });
  res.json(bolos);
});

// Listar bolos em destaque
boloRouter.get("/destaques", async (req, res) => {
  const bolos = await prisma.bolo.findMany({
    where: { destaque: true },
    include: { categoria: true },
  });
  res.json(bolos);
});

// Listar últimos 5 bolos cadastrados
boloRouter.get("/ultimos", async (req, res) => {
  const bolos = await prisma.bolo.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: { categoria: true },
  });
  res.json(bolos);
});

// Buscar bolo por ID
boloRouter.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const bolo = await prisma.bolo.findUnique({
    where: { id },
    include: { categoria: true },
  });
  if (!bolo) return res.status(404).json({ error: "Bolo não encontrado" });
  res.json(bolo);
});

// Criar um bolo
boloRouter.post("/", async (req, res) => {
  try {
    const data = createBoloSchema.parse(req.body);
    const bolo = await prisma.bolo.create({ data });
    res.json(bolo);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Deletar um bolo por ID
boloRouter.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const bolo = await prisma.bolo.delete({ where: { id } });
    res.json({ message: "Bolo deletado com sucesso", bolo });
  } catch (err: any) {
    res.status(400).json({ error: "Não foi possível deletar o bolo" });
  }
});

// ================== CATEGORIAS ==================

// Listar todas as categorias
boloRouter.get("/categorias", async (req, res) => {
  const categorias = await prisma.categoria.findMany({ include: { bolos: true } });
  res.json(categorias);
});

// Criar uma categoria
boloRouter.post("/categorias", async (req, res) => {
  try {
    const { nome } = req.body;
    const categoria = await prisma.categoria.create({ data: { nome } });
    res.json(categoria);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Deletar uma categoria por ID (só se não houver bolos relacionados)
boloRouter.delete("/categorias/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const categoriaComBolos = await prisma.categoria.findUnique({
      where: { id },
      include: { bolos: true },
    });

    if (!categoriaComBolos) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }

    if (categoriaComBolos.bolos.length > 0) {
      return res.status(400).json({ error: "Não é possível deletar categoria com bolos cadastrados" });
    }

    const categoria = await prisma.categoria.delete({ where: { id } });
    res.json({ message: "Categoria deletada com sucesso", categoria });
  } catch (err: any) {
    res.status(400).json({ error: "Não foi possível deletar a categoria" });
  }
});

export default boloRouter;
