import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { CollectionService } from '../service/collection.service';
import { Collection } from '../entity/collection.entity';

@Controller('collections')
export class CollectionController {
  constructor(private collectionService: CollectionService) {}

  @Post()
  async create(@Body() collection: Collection) {
    return this.collectionService.create(collection);
  }

  @Get()
  async findAll(@Query('userId') userId: string) {
    return this.collectionService.findAllByUserId(userId);
  }
}
