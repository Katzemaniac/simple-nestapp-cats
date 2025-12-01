import { Module } from '@nestjs/common';
import { CatController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [CatController], // we need register the CatsController here within the @Module() decorator to the Nest create a instance of the class
  providers: [AppService],
})
export class AppModule { }
