import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from '../entity/request.entity';
import { CreateRequestInput } from '../types/request.types';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private requestRepository: Repository<Request>,
  ) {}

  async create(createRequest: CreateRequestInput): Promise<Request> {
    const existingRequest = await this.requestRepository.findOneBy([{url: createRequest.url,level:createRequest.level}])
    const createdRequest = existingRequest ?? await this.requestRepository.save({...createRequest})
    return createdRequest
  }

  findAll(userId: string): Promise<Request[]> {
    return this.requestRepository.find({ where: { userId } });
  }

  findOne(id: string, userId: string): Promise<Request | null> {
    return this.requestRepository.findOne({ where: { id, userId } });
  }

  async remove(id: string): Promise<void> {
    await this.requestRepository.delete(id);
  }
}
