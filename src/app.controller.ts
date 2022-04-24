import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// comment
@Controller('ping')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any> {
    return await this.appService.getHello();
  }
}
