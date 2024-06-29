import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export abstract class RecordableEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}