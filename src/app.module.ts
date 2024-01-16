import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { RatsController } from './rats/rats.controller';
import { CatService } from './cat/cat.service';
import { RatService } from './rat/rat.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, RatsController],
  providers: [AppService, CatService, RatService],
})
export class AppModule {}
