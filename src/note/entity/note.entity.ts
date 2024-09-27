import { BaseEntity } from 'src/common/entities/BaseEntity';
import { Request } from 'src/request/entity/request.entity';
import { Entity, Column, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class Note extends BaseEntity {
  @Column()
  content: string;

  @OneToOne(() => Request, (request) => request.notes)
  @JoinColumn({ referencedColumnName: 'id', name: 'request_id' })
  request: Request;

  @Column()
  requestId: string;
}
