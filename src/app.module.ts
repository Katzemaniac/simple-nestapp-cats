import { Module } from '@nestjs/common';
import { CatController } from './app.controller';
import { CatService } from './app.service';

@Module({
  imports: [],
  controllers: [CatController], // we need register the CatsController here within the @Module() decorator to the Nest create a instance of the class
  providers: [CatService],
})
export class AppModule { }
