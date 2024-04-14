import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ClsService } from 'nestjs-cls';
import { Observable, tap } from 'rxjs';
import { LoggerService } from '../services/logger.service';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(
    private clsService: ClsService,
    private loggerService: LoggerService,
  ) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const id = randomUUID();
    this.clsService.set('id', id);
    this.loggerService.log('Request log');
    return next.handle().pipe(
      tap(() => {
        this.loggerService.log('Response log');
      }),
    );
  }
}
