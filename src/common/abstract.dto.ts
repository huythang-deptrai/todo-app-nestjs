import { ApiProperty } from '@nestjs/swagger';
import { AbstractEntity } from './abstract.entity';

export class AbstractDto {
  @ApiProperty()
  id: number;

  constructor(entity: AbstractEntity) {
    this.id = entity.id;
  }
}
