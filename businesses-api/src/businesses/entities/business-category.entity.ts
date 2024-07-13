import { Column, Entity } from "typeorm";
import { RecordableEntity } from "../../_common/repository/recordable.entity";

@Entity({ name: 'business_categories' })
export class BusinessCategory extends RecordableEntity {

  @Column({ type: 'varchar', length: 120, unique: true, update: false })
  name: string;

  @Column({ type: 'varchar', length: 120 })
  keywords: string;
}