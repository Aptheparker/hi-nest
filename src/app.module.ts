import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({ // decorator
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
