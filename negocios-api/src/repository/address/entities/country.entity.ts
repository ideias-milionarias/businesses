import { State } from "./state.entity";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { RecordableEntity } from "../../base/recordable.entity";

@Entity({ name: 'countries' })
@Index('country_name_acronym', ['name', 'acronym'], { unique: true })
export class Country extends RecordableEntity {

  @Column({ type: 'varchar', length: 150, update: false })
  name: string;

  @Column({ type: 'varchar', length: 3, update: false })
  acronym: string;

  @OneToMany(() => State, (state) => state.country)
  states: State[];

}