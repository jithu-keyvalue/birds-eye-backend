import { IsNotEmpty, IsUUID } from 'class-validator';

export class IdParamDto {
  @IsNotEmpty()
  @IsUUID('4')
  id!: string;
}
