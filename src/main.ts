import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { KafkaModule } from './kafka/kafka.module';
import { KafkaServer } from './kafka/server/kafka-server';

async function bootstrap() {
  // App Server
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
  console.log('App Server is listening');

  // Microservice Server
  const kafka = await NestFactory.createMicroservice(KafkaModule, {
    strategy: new KafkaServer(),
  });
  await kafka.listen();
  console.log('Kafka Microservice is listening');
    // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       clientId: 'hero',
  //       brokers: ['localhost:9094'],
  //     },
  //     consumer: {
  //       groupId: 'hero-consumer',
  //     },
  //   },
  // });
  // await app.startAllMicroservices();
}
bootstrap();
