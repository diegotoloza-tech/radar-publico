import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { LicitacionesController } from './licitaciones.controller'
import { LicitacionesService } from './licitaciones.service'

@Module({
  imports: [PrismaModule],
  controllers: [LicitacionesController],
  providers: [LicitacionesService]
})
export class LicitacionesModule {}
