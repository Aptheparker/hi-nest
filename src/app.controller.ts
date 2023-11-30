import { Controller, Get } from '@nestjs/common';
import { JsonSocket, MessagePattern, Payload } from '@nestjs/microservices';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller()
export class AppController {
  @Get()
  home() {
    return 'My API HomePage';
  }

  @Get('/test')
  test(@I18n() i18n: I18nContext) {
    return i18n.t('test.greet')
  }

  @Get('/test2')
  test2(@I18n() i18n: I18nContext) {
    const greetMessage = "greet"
    return i18n.t(`test.${greetMessage}`, { lang: 'zh' })
  }

  @MessagePattern('hello')
  helloKafka(@Payload() payload) {
    console.log(JSON.stringify(payload));
  }

  @MessagePattern('bye')
  byeKafka(@Payload() payload) {
    console.log(JSON.stringify(payload));
  }
}
