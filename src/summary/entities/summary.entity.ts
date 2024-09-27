import { BaseEntity } from 'src/common/entities/BaseEntity';
import { Request } from 'src/request/entity/request.entity';
import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Summary extends BaseEntity {
  @Column()
  content: string;

  @OneToOne(() => Request)
  @JoinColumn({ referencedColumnName: 'id', name: 'request_id' })
  request: Request;

  @Column()
  requestId: string;
}
