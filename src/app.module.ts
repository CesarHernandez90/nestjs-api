import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorController } from './author/author/author.controller';

@Module({
  imports: [],
  controllers: [
    AppController, 
    AuthorController
  ],
  providers: [AppService],
})
export class AppModule {}
