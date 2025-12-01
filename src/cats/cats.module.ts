import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [],
  controllers: [CatsController], // we need register the CatsController here within the @Module() decorator to the Nest create a instance of the class
  providers: [CatsService], // Nest will handle this injection (CatsService) and resolve the CatsController's dependecies
})
export class CatsModule { }