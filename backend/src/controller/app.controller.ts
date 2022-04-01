import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/config')
  getConfig(): string {
    return 'Config';
  }

  @Get('/redirect')
  redirect(@Res() res) {
    res.status(302).redirect('/config');
  }
}
