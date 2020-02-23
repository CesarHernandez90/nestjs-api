import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {

    Index() {
        return 'Retorno una lista de Autores';
    }

    Get() {
        return 'Retorno un solo Autor';
    }

    Post() {
        return 'Guardo un nuevo Autor';
    }

    Put() {
        return 'Actualizo un Autor';
    }

    Delete() {
        return 'Elimino un Autor';
    }
}
