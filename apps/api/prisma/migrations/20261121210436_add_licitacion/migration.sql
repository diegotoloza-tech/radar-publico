-- CreateTable
CREATE TABLE "Licitacion" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "organismo" TEXT,
    "region" TEXT,
    "estado" TEXT,
    "fechaPublicacion" TIMESTAMP(3),
    "fechaCierre" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Licitacion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Licitacion_codigo_key" ON "Licitacion"("codigo");
