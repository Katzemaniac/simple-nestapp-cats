import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

// Providers can be: services, repositories, factories, and helpers
// controllers delegate complex tasks to Providers

@Injectable() // attaching metadata to CatService class
// this class it's will handle data storage and retrieval
export class CatService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
