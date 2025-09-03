import express from "express";
import cors from "cors";
import bolosRouter from "./routes/bolos";
import clientesRouter from "./routes/clientes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/bolos", bolosRouter);
app.use("/clientes", clientesRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
