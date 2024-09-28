import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { IdParamDto } from 'src/common/model/IdParamDto';
import { RequestService } from '../service/request.service';
import { CreateRequestInput } from '../types/request.types';

@Controller('requests')
export class RequestController {
  constructor(private requestService: RequestService) {}

  @Post()
  async create(@Body() createRequestDto: CreateRequestInput) {
    const request = await this.requestService.create(createRequestDto);
    return request;
  }

  @Get(':id')
  async findOne(@Param() idParam: IdParamDto, @Query('userId') userId: string) {
    const { id } = idParam;
    return this.requestService.findOne(id, userId);
  }

  @Get()
  async findAll(
    @Query('userId') userId: string,
    @Query('collectionId') collectionId: string,
  ) {
    return this.requestService.findAll(userId, collectionId);
  }
}
