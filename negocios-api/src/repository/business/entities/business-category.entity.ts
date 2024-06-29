import { Column, Entity } from "typeorm";
import { ModifiableEntity } from "../../base/modifiable.entity";

@Entity({ name: 'business_categories' })
export class BusinessCategory extends ModifiableEntity {

  @Column({ type: 'varchar', length: 120, unique: true, update: false })
  name: string;

  @Column({ type: 'varchar', length: 120 })
  keywords: string;
}