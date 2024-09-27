import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { IdParamDto } from 'src/common/model/IdParamDto';
import { SummaryService } from '../service/summary.service';
import { CreateSummaryInput } from '../types/summary.types';

@Controller('summaries')
export class SummaryController {
  constructor(private summaryService: SummaryService) {}

  @Post()
  async create(@Body() createSummaryInput: CreateSummaryInput) {
    const summary = await this.summaryService.create(createSummaryInput);
    return summary;
  }

  @Get(':id')
  async findOne(@Param() idParam: IdParamDto) {
    const { id } = idParam;
    return this.summaryService.findOne(id);
  }

  @Get()
  async findOneByRequestId(@Query('requestId') requestId: string) {
    return this.summaryService.findOneByRequestId(requestId);
  }
}
