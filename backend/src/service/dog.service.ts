import { Injectable } from '@nestjs/common';
import { Dog } from 'src/dto/dog';

@Injectable()
export class DogService {
  private readonly dogs: Dog[] = [];

  adopt(dog: Dog) {
    this.dogs.push(dog);
  }

  findAll(): Dog[] {
    return this.dogs;
  }
}
