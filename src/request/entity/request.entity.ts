import { Collection } from 'src/collection/entity/collection.entity';
import { BaseEntity } from 'src/common/entities/BaseEntity';
import { Note } from 'src/note/entity/note.entity';
import { Summary } from 'src/summary/entities/summary.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

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
  summary: Summary;

  @Column({ nullable: true })
  summaryId: string;

  @OneToOne(() => Note, (note) => note.request, {
    cascade: ['soft-remove'],
    nullable: true,
  })
  notes: Note;

  @Column()
  level: number;

  @Column()
  url: string;

  @Column()
  mode: string;

  @ManyToOne(() => Collection, (collection) => collection.requests)
  @JoinColumn({ referencedColumnName: 'id', name: 'collection_id' })
  collection: Collection;

  @Column()
  collectionId: string;
}
