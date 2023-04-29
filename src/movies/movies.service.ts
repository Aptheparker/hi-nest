import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find(movie => movie.id === +id); // +id === parseInt(id)
  }

  deleteOne(id: string): boolean { // filter movie without the given id
    this.movies.filter(movie => movie.id !== +id);
    return true;
  }

  create(movieData) {
    this.movies.push({ // push new movie with id
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
