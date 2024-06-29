import { State } from "./state.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { RecordableEntity } from "../../base/recordable.entity";

@Entity({ name: 'countries' })
export class Country extends RecordableEntity {

  @Column({ type: 'varchar', length: 150, unique: true, update: false })
  name: string;

  @Column({ type: 'varchar', length: 3, unique: true, update: false })
  acronym: string;

  @OneToMany(() => State, (state) => state.country)
  states: State[];

}