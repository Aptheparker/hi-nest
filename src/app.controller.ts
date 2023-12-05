import { Controller, Get } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get('/i18n')
  i18n(@I18n() i18n: I18nContext) {
    const greetMessage = 'greet';
    return i18n.t(`test.${greetMessage}`, { lang: 'zh' });
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
