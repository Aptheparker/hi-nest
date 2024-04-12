import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ClsService } from 'nestjs-cls';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(private clsService: ClsService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const id = randomUUID();
    this.clsService.set('id', id);
    console.log(`<${id}> Request`);
    return next.handle().pipe(
      tap(() => {
        console.log(`<${id}> Response`);
      }),
    );
  }
}
