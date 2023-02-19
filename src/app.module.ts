import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { GreetingService } from './services/greeting.service';
import { NameService } from './services/name.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [GreetingService, NameService],
})
export class AppModule {}
