import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggerInterceptor } from 'src/common/interceptors/logger.interceptor';
import { LoggerService } from 'src/common/services/logger.service';

@Controller('users')
@UseInterceptors(LoggerInterceptor)
export class UsersController {
  constructor(private readonly loggerService: LoggerService) {}
  @Get()
  getUserList() {
    this.loggerService.log('User list log');
    return 'User list';
  }
}
