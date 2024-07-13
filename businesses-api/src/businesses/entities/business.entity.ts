import { Contact } from "./contact.entity";
import { Job } from "../../jobs/entities/job.entity";
import { BusinessCategory } from "./business-category.entity";
import { Address } from "../../addresses/entities/address.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { ModifiableEntity } from "../../_common/repository/modifiable.entity";

@Entity({ name: 'businesses' })
export class Business extends ModifiableEntity {

  @Column({ type: 'varchar', length: 120, unique: true, update: false })
  name: string;

  @OneToMany(() => Contact, (contact) => contact.business)
  contacts: Contact[];

  @OneToMany(() => Address, (address) => address.business)
  addresses: Address[];
  
  @ManyToMany(() => BusinessCategory)
  @JoinTable()
  categories: BusinessCategory[];

  @ManyToMany(() => Job)
  @JoinTable()
  jobs: Job[];
}