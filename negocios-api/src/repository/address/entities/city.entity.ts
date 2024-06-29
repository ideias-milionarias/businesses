import { State } from "./state.entity";
import { Address } from "./address.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { RecordableEntity } from "../../base/recordable.entity";

@Entity({ name: 'cities' })
export class City extends RecordableEntity {

  @Column({ type: 'varchar', length: 150, unique: true, update: false })
  name: string;

  @Column({ type: 'varchar', length: 2, unique: true, update: false })
  acronym: string;

  @OneToMany(() => Address, (address) => address.city)
  addresses: Address[];

  @ManyToOne(() => State, (state) => state.cities)
  state: State;
}