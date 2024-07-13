import { Business } from "./business.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { ModifiableEntity } from "src/repository/base/modifiable.entity";

@Entity({ name: 'contacts' })
export class Contact extends ModifiableEntity {

  @Column({ type: 'varchar', length: 100, nullable: true })
  email?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  instagram?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  whatsapp?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  phone?: string;

  @ManyToOne(() => Business, (business) => business.contacts)
  business: Business;

}