import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorController } from './author/author/author.controller';
import { AuthorService } from './author/author/author.service';

@Module({
  imports: [],
  controllers: [
    AppController, 
    AuthorController
  ],
  providers: [AppService, AuthorService],
})
export class AppModule {}
