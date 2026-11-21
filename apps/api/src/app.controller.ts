import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get()
  getStatus() {
    return {
      message: 'Radar Público API funcionando',
      status: 'ok'
    }
  }
}