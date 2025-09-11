    import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client"
import { Router } from "express"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()
const router = Router()

router.post("/", async (req, res) => {
  const { email, senha, tipo } = req.body // tipo = "cliente" ou "funcionario"

  const mensaPadrao = "Login ou senha incorretos"

  if (!email || !senha || !tipo) {
    res.status(400).json({ erro: mensaPadrao })
    return
  }

  try {
    let usuario: any = null

    if (tipo === "cliente") {
      usuario = await prisma.cliente.findUnique({ where: { email } })
    } else if (tipo === "funcionario") {
      usuario = await prisma.funcionario.findUnique({ where: { email } })
    } else {
      res.status(400).json({ erro: "Tipo de usuário inválido" })
      return
    }

    if (!usuario) {
      res.status(400).json({ erro: mensaPadrao })
      return
    }

    // compara senha
    const senhaCorreta = bcrypt.compareSync(senha, usuario.senha)
    if (!senhaCorreta) {
      res.status(400).json({ erro: mensaPadrao })
      return
    }

    // gera token
    const token = jwt.sign(
      {
        usuarioId: usuario.id,
        usuarioNome: usuario.nome,
        tipo,
      },
      process.env.JWT_KEY as string,
      { expiresIn: "1h" }
    )

    res.status(200).json({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      tipo,
      token,
    })
  } catch (error) {
    res.status(500).json({ erro: "Erro interno no login", detalhe: error })
  }
})

export default router
