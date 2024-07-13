import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsEntities } from './jobs/entities';
import { AddressesEntities } from './addresses/entities';
import { BusinessesEntities } from './businesses/entities';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BusinessesModule } from './businesses/businesses.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.get<string>('DB_TYPE') as any,
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        synchronize: true,
        entities: [
          ...JobsEntities,
          ...AddressesEntities,
          ...BusinessesEntities,
        ],
      }),
    }),
    BusinessesModule,
  ],
})
export class ApiModule {}
