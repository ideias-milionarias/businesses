import { Rating } from "./rating.entity";
import { Column, Entity, JoinTable, OneToMany } from "typeorm";
import { ModifiableEntity } from "../../base/modifiable.entity";

@Entity({ name: 'services' })
export class Service extends ModifiableEntity {

  @Column({ type: 'varchar', unique: true, length: 120, update: false })
  name: string;

  @Column({ type: 'varchar', length: 120 })
  keywords: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  description: string;

  @Column({ name: 'price_average', type: 'decimal', precision: 10, scale: 2 })
  priceAverage: string;
  
  @OneToMany(() => Rating, (rating) => rating.service)
  @JoinTable()
  ratings: Rating;
}