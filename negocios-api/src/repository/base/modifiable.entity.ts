import { RecordableEntity } from "./recordable.entity";
import { DeleteDateColumn, UpdateDateColumn } from "typeorm";

export abstract class ModifiableEntity extends RecordableEntity {

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: boolean;
}