import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Collection } from '../entity/collection.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class CollectionService {
  constructor(
    @InjectRepository(Collection)
    private collectionRespository: Repository<Collection>,
  ) {}

  create(collection: Collection): Promise<Collection> {
    return this.collectionRespository.save(collection);
  }

  async remove(id: string): Promise<void> {
    await this.collectionRespository.delete(id);
  }

  findOne(id: string): Promise<Collection | null> {
    return this.collectionRespository.findOneBy({ id });
  }

  findAllByUserId(userId: string): Promise<Collection | null> {
    return this.collectionRespository.findOneBy({ userId });
  }
}
