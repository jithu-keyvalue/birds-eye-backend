import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
})
export class AppModule {}
