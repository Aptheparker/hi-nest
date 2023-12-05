import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import * as path from 'path';
import { KafkaModule } from './kafka/kafka.module';
import { AppService } from './app.service';
import { WebSocketModule } from './websocket/websocket.module';
@Module({
  imports: [
    //TODO: WebSocket
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
    MoviesModule,
    KafkaModule,
    WebSocketModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
