import { Controller, Get, HttpCode, Param, Post, Query, Req } from '@nestjs/common';
import type { Request } from 'express';

// decorator defining this class to be a controller, providing necessary metadata
@Controller('cats') // specifying a path prefix, grouping related routes to manipulate 'cats' entity (optional)
export class CatController {
  @Get('all') // endpoint defined by HTTP request method and prefix 'cats'
  findAll(@Req() request: Request): string { // access the request's details (you can use @Body to access directly)
    return 'Return all cats';
  }

  @Post()
  // default status code is 200, for POST is 201
  @HttpCode(204) // but you can change manually
  create(): string {
    return 'This action add a new cat';
  }

  @Get(':id') // define a route parameter token in the GET decorator
  findOne(@Param('id') id: string): string { // @Param() decorator make the route parameters (like id) accessible as properties
    return `This action return a cat of id ${id}`; // or you can pass a specific parameter token to the decorator
  }

  @Get()
  // using @Query() decorator to handle query parameters, extracting them from request
  findByFilter(@Query('age') age: number, @Query('breed') breed: string) {
    return `This action returns all cats with ${age} age and that're ${breed} breed`;
  }
}
