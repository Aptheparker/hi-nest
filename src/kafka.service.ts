import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class MyProducerService {
  constructor(
    @Inject('my_kafka_client') private readonly kafkaClient: ClientKafka
  ){ }

  sendMessage(message) {
    try {  
    this.kafkaClient.emit('movie', message)
    } catch {
      console.log("error")
    }
  }
}