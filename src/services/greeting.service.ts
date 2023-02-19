import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  getGreeting(): string {
    return 'Hello';
  }
}
