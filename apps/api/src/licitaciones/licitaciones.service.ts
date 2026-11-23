import { Injectable, NotFoundException, ConflictException } from '@nestjs/common'
import { Prisma } from '../generated/prisma/client.js'
import { PrismaService } from '../prisma/prisma.service'
import { CreateLicitacionDto } from './dto/create-licitacion.dto'
import { UpdateLicitacionDto } from './dto/update-licitacion.dto'

@Injectable()
export class LicitacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.licitacion.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
  }

  async findOne(id: string) {
    const licitacion = await this.prisma.licitacion.findUnique({
      where: { id }
    })

    if (!licitacion) {
      throw new NotFoundException('Licitación no encontrada')
    }

    return licitacion
  }

  async create(data: CreateLicitacionDto) {
    try {
      return await this.prisma.licitacion.create({
        data: {
          ...data,
          fechaPublicacion: data.fechaPublicacion
            ? new Date(data.fechaPublicacion)
            : undefined,
          fechaCierre: data.fechaCierre
            ? new Date(data.fechaCierre)
            : undefined
        }
      })
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError && 
        error.code === 'P2002'
      ) {
        throw new ConflictException('El código de licitación ya existe')
      }

      throw error
    }
  }

  async update(id: string, data: UpdateLicitacionDto) {
    await this.findOne(id)

    return this.prisma.licitacion.update({
      where: { id },
      data: {
        ...data,
        fechaPublicacion: data.fechaPublicacion
          ? new Date(data.fechaPublicacion)
          : undefined,
        fechaCierre: data.fechaCierre
          ? new Date(data.fechaCierre)
          : undefined
      }
    })
  }

  async remove(id: string) {
    await this.findOne(id)

    return this.prisma.licitacion.delete({
      where: { id }
    })
  }
}

