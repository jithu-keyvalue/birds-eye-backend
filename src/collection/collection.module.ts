import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collection } from './entity/collection.entity';
import { CollectionService } from './service/collection.service';
import { CollectionController } from './controller/collection.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Collection])],
  providers: [CollectionService],
  controllers: [CollectionController],
})
export class CollectionModule {}
