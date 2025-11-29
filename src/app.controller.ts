import { Controller, Get } from '@nestjs/common';
// import type { Request } from 'express';

const breeds: Array<string> = ['Siamese', 'Persian', 'Maine Coon', 'Bengal'];

// decorator defining this class to be a controller, providing necessary metadata
@Controller('cats') // specifying a path prefix, grouping related routes to manipulate 'cats' entity (optional)
export class AppController {
  @Get() // endpoint defined by HTTP request method and prefix 'cats'
  findAll(): string {
    return 'Return all cats';
  }

  @Get('breeds')
  findAllBreeds(): Array<string> {
    return breeds;
  }
}
