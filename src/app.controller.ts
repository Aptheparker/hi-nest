import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  home(){
    return 'My API HomePage'
  }
}
