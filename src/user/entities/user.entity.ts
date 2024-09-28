import { BaseEntity } from 'src/common/entities/BaseEntity';
import { Request } from 'src/request/entity/request.entity';
import { Entity, Column, OneToMany, Collection, JoinColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => Request, (request) => request.user, {
    cascade: ['soft-remove'],
  })
  requests: Request[];

  // @OneToMany(() => Collection, (collection) => collection.user)
  @JoinColumn({ referencedColumnName: 'id', name: 'user_id' })
  collections: Collection[];
}
