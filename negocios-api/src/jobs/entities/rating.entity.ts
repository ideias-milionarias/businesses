import { Job } from "./job.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { RecordableEntity } from "../../_common/repository/recordable.entity";

@Entity({ name: 'ratings' })
export class Rating extends RecordableEntity {

  @Column({ type: 'decimal', precision: 10, scale: 2, update: false })
  price: string;

  @Column({ type: 'tinyint', unsigned: true, nullable: true, update: false })
  rate: number;

  @Column({ type: 'varchar', length: 100, nullable: true, update: false })
  description?: string;

  @Column({ name: 'created_by', type: 'varchar', length: 100, update: false })
  createdBy: string;

  @ManyToOne(() => Job, (service) => service.ratings)
  job: Job;
}