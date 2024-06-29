import { City } from "./city.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { Business } from "../../business/entities/business.entity";
import { ModifiableEntity } from "src/repository/base/modifiable.entity";

@Entity({ name: 'addresses' })
export class Address extends ModifiableEntity {

  @Column({ type: 'varchar', length: 100 })
  street: string;

  @Column({ type: 'varchar', length: 100 })
  number: string;

  @Column({ type: 'varchar', length: 100 })
  neighborhood: string;

  @Column({ name: 'postal_code', type: 'varchar', length: 20 })
  postalCode: string;

  @Column({ type: 'point' })
  coordinates: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  complement: string;

  @ManyToOne(() => City, (city) => city.addresses)
  city: City;

  @ManyToOne(() => Business, (business) => business.addresses)
  business: Business;
}