import { Module } from '@nestjs/common';
import { JobsEntities } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(JobsEntities)]
})
export class JobsModule { }
