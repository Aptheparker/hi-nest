import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerService } from 'src/services/logger.service';
@Module({
  providers: [UsersService, LoggerService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
