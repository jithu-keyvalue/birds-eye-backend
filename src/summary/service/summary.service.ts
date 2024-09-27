import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSummaryInput } from '../types/summary.types';
import { Summary } from '../entities/summary.entity';
import { executionAsyncId } from 'async_hooks';

@Injectable()
export class SummaryService {
  constructor(
    @InjectRepository(Summary)
    private summaryRepository: Repository<Summary>,
  ) {}

  async create(summary: CreateSummaryInput): Promise<Summary> {
    const existingSummary = await this.summaryRepository.findOneBy({requestId: summary.requestId})
    summary.id = existingSummary?.id
    return this.summaryRepository.save({ ...summary });
  }

  findOne(id: string): Promise<Summary | null> {
    return this.summaryRepository.findOne({ where: { id } });
  }

  findOneByRequestId(requestId: string): Promise<Summary | null> {
    return this.summaryRepository.findOne({ where: { requestId } });
  }

  async remove(id: string): Promise<void> {
    await this.summaryRepository.delete(id);
  }
}
