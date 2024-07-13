import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessesEntities } from './entities';
import { BusinessesService } from './businesses.service';
import { BusinessesController } from './businesses.controller';

@Module({
  imports: [TypeOrmModule.forFeature(BusinessesEntities)],
  providers: [BusinessesService],
  controllers: [BusinessesController],
})
export class BusinessesModule { }
