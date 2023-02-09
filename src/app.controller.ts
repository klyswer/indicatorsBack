import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AppService } from './app.service';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  health(): string {
    return this.appService.health();
  }

  @Get('indicators')
  getData() {
    return this.appService.getIndicators();
  }
}
