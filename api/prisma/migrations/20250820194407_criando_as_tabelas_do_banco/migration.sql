/*
  Warnings:

  - You are about to drop the `carros` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `marcas` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Sabor" AS ENUM ('CHOCOLATE', 'BAUNILHA', 'MORANGO', 'LIMAO', 'DOCE_DE_LEITE', 'RED_VELVET', 'CENOURA');

-- CreateEnum
CREATE TYPE "Tamanho" AS ENUM ('PEQUENO', 'MEDIO', 'GRANDE');

-- DropForeignKey
ALTER TABLE "carros" DROP CONSTRAINT "carros_marcaId_fkey";

-- DropTable
DROP TABLE "carros";

-- DropTable
DROP TABLE "marcas";

-- DropEnum
DROP TYPE "Combustiveis";

-- CreateTable
CREATE TABLE "categorias" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bolos" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "descricao" TEXT,
    "preco" DECIMAL(10,2) NOT NULL,
    "pesoKg" DOUBLE PRECISION NOT NULL,
    "foto" TEXT NOT NULL,
    "sabor" "Sabor" NOT NULL DEFAULT 'CHOCOLATE',
    "tamanho" "Tamanho" NOT NULL DEFAULT 'MEDIO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "destaque" BOOLEAN NOT NULL DEFAULT false,
    "categoriaId" INTEGER NOT NULL,

    CONSTRAINT "bolos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" VARCHAR(20),
    "endereco" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcionarios" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "cargo" VARCHAR(50) NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" VARCHAR(20),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "funcionarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vendas" (
    "id" SERIAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "valorTotal" DECIMAL(10,2) NOT NULL,
    "dataVenda" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clienteId" INTEGER NOT NULL,
    "funcionarioId" INTEGER NOT NULL,
    "boloId" INTEGER NOT NULL,

    CONSTRAINT "vendas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "funcionarios_email_key" ON "funcionarios"("email");

-- AddForeignKey
ALTER TABLE "bolos" ADD CONSTRAINT "bolos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendas" ADD CONSTRAINT "vendas_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendas" ADD CONSTRAINT "vendas_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "funcionarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendas" ADD CONSTRAINT "vendas_boloId_fkey" FOREIGN KEY ("boloId") REFERENCES "bolos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
