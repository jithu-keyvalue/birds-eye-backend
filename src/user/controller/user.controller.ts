import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { IdParamDto } from 'src/common/model/IdParamDto';
import { CreateUserInput } from '../types/user.types';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserInput) {
    const user = await this.userService.create(createUserDto);
    return user;
  }

  @Get(':id')
  async findOne(@Param() idParam: IdParamDto) {
    const { id } = idParam;
    return this.userService.findOne(id);
  }
}
