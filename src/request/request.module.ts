import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from './entity/request.entity';
import { RequestService } from './service/request.service';
import { RequestController } from './controller/request.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Request])],
  providers: [RequestService],
  controllers: [RequestController],
})
export class RequestModule {}
