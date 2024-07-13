import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Business } from './entities/business.entity';

@Injectable()
export class BusinessesService {
  
  constructor(
    @InjectRepository(Business)
    private readonly _repository: Repository<Business>,
  ) { }

  create(business: Partial<Business>): Promise<Business> {
    return this._repository.save(business);
  }
  
}
