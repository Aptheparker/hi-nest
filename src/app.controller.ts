import { Controller, Get } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';
import { KafkaProducer } from './kafka/client/kafka-producer';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly kafkaProducer = new KafkaProducer();

  constructor(private readonly appService: AppService) {}

  @Get('/i18n')
  i18n(@I18n() i18n: I18nContext) {
    const greetMessage = 'greet';
    return i18n.t(`test.${greetMessage}`, { lang: 'zh' });
  }

  @Get()
  getHello(): string {
    this.kafkaProducer.send('test', 'test message');
    return this.appService.getHello();
  }
}
