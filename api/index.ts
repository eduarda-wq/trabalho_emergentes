import express from 'express'
import cors from 'cors'
import routesClientes from './routes/clientes'
import routesFuncionarios from './routes/funcionarios'
import routesVendas from './routes/vendas'
import routerBolos from './routes/bolos'
import routerCategorias from './routes/categorias'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use("/clientes", routesClientes)
app.use("/funcionarios", routesFuncionarios)
app.use("/vendas", routesVendas)
app.use("/bolos", routerBolos)
app.use("/categorias", routerCategorias)

app.get('/', (req, res) => {
  res.send('API: Bolos Avenida')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
