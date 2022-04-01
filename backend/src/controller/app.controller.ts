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

  @Get('/random')
  random(): number[] {
    const result = [...Array(100).keys()]
      .filter((val) => val % 5 === 0)
      .map((val) => val * 2);

    return result;
  }
}
