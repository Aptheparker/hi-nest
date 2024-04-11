import {
  ExecutionContext,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './logger.middleware';
import { AuthController } from './auth/auth.controller';
import { UsersModule } from './users/users.module';
import { ClsModule } from 'nestjs-cls';
import { v4 as uuid } from 'uuid';

@Module({
  imports: [
    ClsModule.forRoot({
      global: true,
      interceptor: {
        mount: true,
        generateId: true,
        idGenerator: (context: ExecutionContext) =>
          context.switchToHttp().getRequest().headers['x-request-id'] ?? uuid(),
      },
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AuthController);
  }
}
