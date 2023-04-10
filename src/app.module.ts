import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({ // decorator
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
