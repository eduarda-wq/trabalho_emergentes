import express from 'express'
import cors from 'cors'
import routesClientes from './routes/clientes'
import routerBolos from './routes/bolos'


const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use("/clientes", routesClientes)

app.use("/bolos", routerBolos)


app.get('/', (req, res) => {
  res.send('API: Bolos Avenida')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
