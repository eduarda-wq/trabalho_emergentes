import { Router } from "express";
import { loginClienteSchema, registerClienteSchema } from "../schemas/clienteSchema"
import bcrypt from "bcryptjs";
import prisma from "../prisma";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const data = registerClienteSchema.parse(req.body);
    const hashedPassword = await bcrypt.hash(data.senha, 10);
    const cliente = await prisma.cliente.create({
      data: { ...data, senha: hashedPassword },
    });
    res.json({ id: cliente.id, nome: cliente.nome, email: cliente.email });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const data = loginClienteSchema.parse(req.body);
    const cliente = await prisma.cliente.findUnique({ where: { email: data.email } });
    if (!cliente) return res.status(400).json({ error: "Email ou senha incorretos" });

    const passwordMatch = await bcrypt.compare(data.senha, cliente.senha);
    if (!passwordMatch) return res.status(400).json({ error: "Email ou senha incorretos" });

    const token = jwt.sign(
      { id: cliente.id, email: cliente.email },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "1h" }
    );
    res.json({ id: cliente.id, nome: cliente.nome, email: cliente.email, token });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
