import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { IdParamDto } from 'src/common/model/IdParamDto';
import { NoteService } from '../service/note.service';
import { CreateNoteInput, UpdateNoteInput } from '../types/note.types';

@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post()
  async create(@Body() createNoteInput: CreateNoteInput) {
    const note = await this.noteService.create(createNoteInput);
    return note;
  }

  @Get(':id')
  async findOne(@Param() idParam: IdParamDto) {
    const { id } = idParam;
    return this.noteService.findOne(id);
  }

  @Get()
  async findAll(@Query('requestId') requestId: string) {
    return this.noteService.findByRequestId(requestId);
  }

  @Patch(':id')
  async patch(
    @Param() idParam: IdParamDto,
    @Body() updateNoteInput: UpdateNoteInput,
  ) {
    const { id } = idParam;
    return this.noteService.patch(id, updateNoteInput);
  }
}
