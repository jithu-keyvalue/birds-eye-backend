import { Note } from '../entity/note.entity';

export type CreateNoteInput = Note;
export type UpdateNoteInput = Partial<Note>;
