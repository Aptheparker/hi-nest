import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggerInterceptor } from 'src/interceptors/logger.interceptor';

@Controller('users')
@UseInterceptors(LoggerInterceptor)
export class UsersController {
  @Get()
  test() {
    return 'test';
  }
}
