import { Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

// decorator defining this class to be a controller, providing necessary metadata
@Controller('cats') // specifying a path prefix, grouping related routes to manipulate 'cats' entity (optional)
export class CatsController {
  // CatService is injected here, throught the class constructor; catService is declared and initialized 
  constructor(private catService: CatsService) { }

  @Get('all') // endpoint defined by HTTP request method and prefix 'cats'
  async findAll(): Promise<Cat[]> {   // defining a promisse for our async function, that'll return all cats from our car provider
    return this.catService.findAll();
  }

  @Post()
  // default status code is 200, for POST is 201
  @HttpCode(204) // but you can change manually, as here I changed to 204 (no content - blank)
  async create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
  }

  @Get(':id') // define a route parameter token in the GET decorator
  findOne(@Param('id') id: string): string {        // @Param() decorator make the route parameters (like id) accessible as properties
    return `This action return a cat of id ${id}`;  // or you can pass a specific parameter token to the decorator
  }

  @Get()
  // using @Query() decorator to handle query parameters, extracting them from request
  findByFilter(@Query('age') age: number, @Query('breed') breed: string) {
    return `This action returns all cats with ${age} age and that're ${breed} breed`;
  }
}
