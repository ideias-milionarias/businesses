import { Contact } from "./contact.entity";
import { BusinessCategory } from "./business-category.entity";
import { ModifiableEntity } from "../../base/modifiable.entity";
import { Address } from "src/repository/address/entities/address.entity";
import { Service } from "src/repository/services/entities/service.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";

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

  @ManyToMany(() => Service)
  @JoinTable()
  services: Service[];
}