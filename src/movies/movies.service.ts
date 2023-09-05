import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { get } from 'http';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id); // +id === parseInt(id)

    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }

    return movie;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  create(movieData) {
    this.movies.push({
      // push new movie with id
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData) {
    const movie = this.getOne(id); //get the movie with the given id
    this.deleteOne(id); // delete the previous body with the given id
    this.movies.push({ ...movie, ...updateData }); // add the new body
  }
}
