import { Module } from '@nestjs/common';
import { config } from './database.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [config],
  exports: [config],
})
export class DatabaseModule {}
