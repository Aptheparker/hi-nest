import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { Observable, tap } from 'rxjs';

const li = [];
@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(private clsService: ClsService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap(() => {
        console.log(this.clsService.getId());
        li.push(this.clsService.getId());
        console.log(li);
      }),
    );
  }
}
