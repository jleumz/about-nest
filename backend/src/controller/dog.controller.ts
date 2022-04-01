import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { DogService } from 'src/service/dog.service';
import { Dog } from 'src/dto/dog';
import { ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  getDogs(): Dog[] {
    return this.dogService.findAll();
  }

  @Post('/adopt')
  @ApiResponse({
    status: 201,
    description: 'The dog has been successfully adopted.',
  })
  @HttpCode(201)
  adoptDog(@Body() dog: Dog) {
    this.dogService.adopt(dog);
  }
}
