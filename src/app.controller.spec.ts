import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { NameService } from './services/name.service';
import { GreetingService } from './services/greeting.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [NameService, GreetingService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
