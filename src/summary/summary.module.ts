import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Summary } from './entities/summary.entity';
import { SummaryService } from './service/summary.service';
import { SummaryController } from './controller/summary.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Summary])],
  providers: [SummaryService],
  controllers: [SummaryController],
})
export class SummaryModule {}
