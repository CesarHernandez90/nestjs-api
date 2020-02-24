import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AuthorService } from "./author.service";
import { CreateAuthorDto } from './dto/createAuthor.dto';
import { IAuthor } from './interfaces/author.interface';

@Controller('author')
export class AuthorController {

    constructor(
        private authorService: AuthorService,
    ) { }

    @Get('index')
    Index(): IAuthor[] {
        return this.authorService.Index();
    }

    @Get('get/:id')
    Get(@Param('id') id: string): IAuthor {
        return this.authorService.Get(id);
    }

    @Post('post')
    Post(@Body() createAuthor: CreateAuthorDto): IAuthor {
        return this.authorService.Post(createAuthor);
    }

    @Put('put/:id')
    Put(@Body() createAuthor: CreateAuthorDto, @Param('id') id: string): IAuthor {
        return this.authorService.Put(createAuthor, id);
    }

    @Delete('delete/:id')
    Delete(@Param('id') id: string): IAuthor {
        return this.authorService.Delete(id);
    }

}
