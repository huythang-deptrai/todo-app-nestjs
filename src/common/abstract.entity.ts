import { Column, DataType, Model } from 'sequelize-typescript';
import type { Constructor } from './types';
import { BadGatewayException } from '@nestjs/common';
import { AbstractDto } from './abstract.dto';

export abstract class AbstractEntity<
  DTO extends AbstractDto = AbstractDto,
  O = never,
> extends Model {

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  private dtoClass: Constructor<DTO, [AbstractEntity, O?]>;

  toDto(options?: O): DTO {
    const dtoClass = this.dtoClass;

    if (!dtoClass) {
      throw new BadGatewayException('entity in valid');
    }

    return new this.dtoClass(this, options);
  }
}
