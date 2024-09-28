import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from '../entity/note.entity';
import { CreateNoteInput, UpdateNoteInput } from '../types/note.types';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,
  ) {}

  async create(note: CreateNoteInput): Promise<Note> {
    const existingNote = await this.noteRepository.findOneBy({
      requestId: note.requestId,
    });
    note.id = existingNote?.id;
    return this.noteRepository.save({ ...note });
  }

  findOne(id: string): Promise<Note | null> {
    return this.noteRepository.findOne({ where: { id } });
  }

  findByRequestId(requestId: string): Promise<Note[] | null> {
    return this.noteRepository.find({ where: { requestId } });
  }

  patch(id: string, note: UpdateNoteInput): Promise<Note | null> {
    return this.noteRepository.save({ id, ...note });
  }

  async remove(id: string): Promise<void> {
    await this.noteRepository.delete(id);
  }
}
