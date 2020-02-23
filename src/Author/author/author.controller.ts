import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AuthorService } from "./author.service";

@Controller('author')
export class AuthorController {

    constructor(
        private authorService: AuthorService,
    ) { }

    @Get('index')
    Index(): string {
        return this.authorService.Index();
    }

    @Get('get')
    Get(): string {
        return this.authorService.Get();
    }

    @Post('post')
    Post(): string {
        return this.authorService.Post();
    }

    @Put('put')
    Put(): string {
        return this.authorService.Put();
    }

    @Delete('delete')
    Delete(): string {
        return this.authorService.Delete();
    }

}
