import { City } from "./city.entity";
import { Country } from "./country.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { RecordableEntity } from "../../base/recordable.entity";

@Entity({ name: 'states' })
export class State extends RecordableEntity {

  @Column({ type: 'varchar', length: 150, unique: true, update: false })
  name: string;

  @Column({ type: 'varchar', length: 3, unique: true, update: false })
  acronym: string;

  @OneToMany(() => City, (city) => city.state)
  cities: City[];

  @ManyToOne(() => Country, (country) => country.states)
  country: Country;
}