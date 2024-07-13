import { City } from "./city.entity";
import { Column, Entity, Index, ManyToOne } from "typeorm";
import { Business } from "../../businesses/entities/business.entity";
import { ModifiableEntity } from "../../_common/repository/modifiable.entity";

@Entity({ name: 'addresses' })
export class Address extends ModifiableEntity {

  @Column({ type: 'varchar', length: 100, nullable: true })
  street?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  number?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  neighborhood?: string;

  @Column({ name: 'postal_code', type: 'varchar', length: 20, nullable: true })
  postalCode?: string;

  @Column({ type: 'point' })
  @Index({ spatial: true })
  coordinates: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  complement?: string;

  @ManyToOne(() => City, (city) => city.addresses)
  city?: City;

  @ManyToOne(() => Business, (business) => business.addresses)
  business?: Business;
}