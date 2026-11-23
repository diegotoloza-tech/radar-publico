import { Controller, Body, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { LicitacionesService } from './licitaciones.service'
import { CreateLicitacionDto } from './dto/create-licitacion.dto'
import { UpdateLicitacionDto } from './dto/update-licitacion.dto'

@Controller('licitaciones')
export class LicitacionesController {
  constructor(private readonly licitacionesService: LicitacionesService) {}

  @Get()
  findAll() {
    return this.licitacionesService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.licitacionesService.findOne(id)
  }

  @Post()
  create(@Body() body: CreateLicitacionDto) {
    return this.licitacionesService.create(body)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateLicitacionDto
  ) {
    return this.licitacionesService.update(id, body)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.licitacionesService.remove(id)
  }
}