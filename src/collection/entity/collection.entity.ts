import { BaseEntity } from 'src/common/entities/BaseEntity';
import { Request } from 'src/request/entity/request.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, ManyToOne, OneToMany } from 'typeorm';

export class Collection extends BaseEntity {
  @Column()
  name: string;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.collections)
  user: User;

  @OneToMany(() => Request, (request) => request.collection)
  requests: Request[];
}
