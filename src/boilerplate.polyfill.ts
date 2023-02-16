import 'source-map-support/register';

import { compact, map } from 'lodash';

import { AbstractEntity } from './common/abstract.entity';
import { AbstractDto } from './common/abstract.dto';


// type GetConstructorArgs<T> = T extends new (...args: infer U) => any
//   ? U
//   : never;

declare global {
  interface Array<T> {
    toDtos<Dto extends AbstractDto>(this: T[], options?: any): Dto[];
  }
}

Array.prototype.toDtos = function <
  Entity extends AbstractEntity<Dto>,
  Dto extends AbstractDto,
>(options?: any): Dto[] {
  return compact(
    map<Entity, Dto>(this, (item) => item.toDto(options as never)),
  );
};

