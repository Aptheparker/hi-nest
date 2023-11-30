import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';

@Controller('movies')
export class MoviesController {

  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }

  @MessagePattern('movie')
  readMessage(@Payload() message: any, @Ctx() context: KafkaContext) {
    // message, context.getMessage() 동일하게 message 접근 가능
    const originalMessage = context.getMessage()
    const response = originalMessage.value
    
    console.log(originalMessage.value)
    console.log("context:", context)
    
    // 메시지 이외 context 정보
    // console.log(context.getTopic())
    // console.log(context.getArgs())
    // console.log(context.getPartition())

    return response
  }

}
