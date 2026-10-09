import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { app: string; status: string } {
    return {
      app: 'FamilyConnect API',
      status: 'running',
    };
  }
}
