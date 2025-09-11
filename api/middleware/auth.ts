import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export function autenticar(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ erro: "Token não fornecido" })
  }

  const token = authHeader.split(" ")[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY as string)
    req.body.usuarioLogado = decoded // guarda os dados do token
    next()
  } catch (error) {
    res.status(401).json({ erro: "Token inválido ou expirado" })
  }
}
