import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoggerService } from 'src/common/services/logger.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, LoggerService],
  exports: [UsersService],
})
export class UsersModule {}
