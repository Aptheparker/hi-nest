import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { Message } from '@nestjs/microservices/external/kafka.interface';

@Controller()
export class KafkaController {
  // subscribe to kafka topic
  @EventPattern({topic: 'test'})
  showMessage(message: Message): void {
      
    // TODO: WebSocket
    // SocketsCenter.broadcast(message.value.toString());
    console.log('controller:', message);
  }
}
