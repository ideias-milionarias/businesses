import { Module } from '@nestjs/common';
import { AddressesEntities } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(AddressesEntities)]
})
export class AddressesModule { }
