import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MyProducerService } from './kafka.service';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [
    ClientsModule.register({
      isGlobal: false,
      clients: [
        {
          name: 'my_kafka_client',
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: 'my_kafka_client',
              brokers: ['localhost:9094'],
            },
            // producer 만 쓸 경우엔 consumer 설정 불필요
            consumer: {
              groupId: 'my_kafka_consumer',
            },
          },
        },
      ],
    }),
  ],
  controllers: [],
  providers: [MyProducerService],
  exports: [],
})
export class MyKafkaModule {}
