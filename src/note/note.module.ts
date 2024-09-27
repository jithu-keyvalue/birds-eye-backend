import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './entity/note.entity';
import { NoteService } from './service/note.service';
import { NoteController } from './controller/note.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Note])],
  providers: [NoteService],
  controllers: [NoteController],
})
export class NoteModule {}
