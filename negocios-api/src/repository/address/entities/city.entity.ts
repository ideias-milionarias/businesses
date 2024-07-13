import { State } from "./state.entity";
import { Address } from "./address.entity";
import { RecordableEntity } from "../../base/recordable.entity";
import { Column, Entity, Index, ManyToOne, OneToMany } from "typeorm";

@Entity({ name: 'cities' })
@Index('city_name_acronym', ['name', 'acronym'], { unique: true })
export class City extends RecordableEntity {

  @Column({ type: 'varchar', length: 150, update: false })
  name: string;

  @Column({ type: 'varchar', length: 2, update: false })
  acronym: string;

  @OneToMany(() => Address, (address) => address.city)
  addresses: Address[];

  @ManyToOne(() => State, (state) => state.cities)
  state: State;
}