import { Injectable } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';

@Injectable()
export class LoggerService {
  constructor(private readonly clsService: ClsService) {}

  log(message: string) {
    console.log(`<${this.clsService.get('id')}> ${message}`);
  }
}
