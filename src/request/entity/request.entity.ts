import { BaseEntity } from 'src/common/entities/BaseEntity';
import { Note } from 'src/note/entity/note.entity';
import { Summary } from 'src/summary/entities/summary.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  JoinColumn,
  ManyToOne,
  OneToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Request extends BaseEntity {
  @Column()
  title: string;

  @ManyToOne(() => User, (user) => user.requests)
  @JoinColumn({ referencedColumnName: 'id', name: 'user_id' })
  user: User;

  @Column()
  userId: string;

  @OneToOne(() => Summary, { nullable: true })
  @JoinColumn({ referencedColumnName: 'id', name: 'summary_id' })
  summary: Summary | null;

  @Column({ nullable: true })
  summaryId: string;

  @OneToMany(() => Note, (note) => note.request, {
    cascade: ['soft-remove'],
    nullable: true,
  })
  notes: Note[];
}
