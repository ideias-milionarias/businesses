import { Business } from './entities/business.entity';
import { Body, Controller, Post } from '@nestjs/common';
import { BusinessesService } from './businesses.service';

@Controller()
export class BusinessesController {

  constructor(private readonly service: BusinessesService) {}

  @Post()
  create(@Body() business: Business): Promise<Business> {
    return this.service.create(business);
  }
}
