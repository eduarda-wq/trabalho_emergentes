import { Router } from "express";
import { prisma } from "../prisma";
import { createBoloSchema } from "../schemas/boloSchema";

const router = Router();

// Listar todos os bolos
router.get("/", async (req, res) => {
  const bolos = await prisma.bolo.findMany({
    include: { categoria: true },
  });
  res.json(bolos);
});

// Criar um bolo
router.post("/", async (req, res) => {
  try {
    const data = createBoloSchema.parse(req.body);
    const bolo = await prisma.bolo.create({ data });
    res.json(bolo);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Listar bolo por ID
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const bolo = await prisma.bolo.findUnique({ where: { id }, include: { categoria: true } });
  if (!bolo) return res.status(404).json({ error: "Bolo não encontrado" });
  res.json(bolo);
});

export default router;
