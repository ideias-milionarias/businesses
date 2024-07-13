import { City } from "./city.entity";
import { Country } from "./country.entity";
import { Column, Entity, Index, ManyToOne, OneToMany } from "typeorm";
import { RecordableEntity } from "../../_common/repository/recordable.entity";

@Entity({ name: 'states' })
@Index('state_name_acronym', ['name', 'acronym'], { unique: true })
export class State extends RecordableEntity {

  @Column({ type: 'varchar', length: 150, update: false })
  name: string;

  @Column({ type: 'varchar', length: 3, update: false })
  acronym: string;

  @OneToMany(() => City, (city) => city.state)
  cities: City[];

  @ManyToOne(() => Country, (country) => country.states)
  country: Country;
}