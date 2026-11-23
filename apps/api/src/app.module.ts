import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { UsersModule } from './users/users.module'
import { LicitacionesModule } from './licitaciones/licitaciones.module';

@Module({
  imports: [UsersModule, LicitacionesModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {}