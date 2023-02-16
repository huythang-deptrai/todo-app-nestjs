import { Constructor } from '../common/types';
import { AbstractDto } from '../common/abstract.dto';
import type { AbstractEntity } from '../common/abstract.entity';

export function UseDto(
  dtoClass: Constructor<AbstractDto, [AbstractEntity, unknown]>,
): ClassDecorator {
  return (ctor) => {
    ctor.prototype.dtoClass = dtoClass;
  };
}
