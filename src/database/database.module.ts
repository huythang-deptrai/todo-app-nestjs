import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { databaseProviders } from './database.provider';

@Module({
  imports: [ SharedModule ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
