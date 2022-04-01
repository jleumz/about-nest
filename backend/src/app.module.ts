import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { DogService } from './service/dog.service';
import { DogController } from './controller/dog.controller';

@Module({
  imports: [],
  controllers: [AppController, DogController],
  providers: [AppService, DogService],
})
export class AppModule {}
