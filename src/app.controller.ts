import { Controller, Get, Param } from '@nestjs/common';
import { NameService } from './services/name.service';
import { GreetingService } from './services/greeting.service';

@Controller()
export class AppController {
  constructor(
    private readonly name: NameService,
    private readonly greeting: GreetingService,
  ) {}

  @Get()
  getHello(): string {
    return `${this.greeting.getGreeting()} ${this.name.getName()}!`;
  }

  @Get(':name')
  getSpecificHello(@Param('name') name: string): string {
    return `${this.greeting.getGreeting()} ${name}`;
  }
}
