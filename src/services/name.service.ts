import { Injectable } from '@nestjs/common';

@Injectable()
export class NameService {
  getName(): string {
    return 'World';
  }
}
