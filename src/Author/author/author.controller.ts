import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('author')
export class AuthorController {

    @Get('index')
    Index(): string {
        return 'Retorno una lista de Autores';
    }

    @Get('get')
    Get(): string {
        return 'Retorno un solo Autor';
    }

    @Post('post')
    Post(): string {
        return 'Guardo un nuevo Autor';
    }

    @Put('put')
    Put(): string {
        return 'Actualizo un Autor';
    }

    @Delete('delete')
    Delete(): string {
        return 'Elimino un Autor';
    }

}
