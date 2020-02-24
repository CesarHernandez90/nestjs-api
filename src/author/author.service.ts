import { Injectable } from '@nestjs/common';
import { IAuthor } from './interfaces/author.interface';

@Injectable()
export class AuthorService {

    private authors: IAuthor[] = [
        {
            id: '1',
            firstName: 'Juan Carlos',
            lastName: 'Hernández Rojas',
            age: 55,
            gender: 'Masculino'
        }
    ];

    Index() {
        return this.authors;
    }

    Get(id: string) {
        return this.authors.find(author => author.id == id);
    }

    Post(author: IAuthor) {
        this.authors.push(author);
        return author;
    }

    Put(author: IAuthor, id: string) {
        const index =this.authors.indexOf(author);
        this.authors.splice(index, 1, author);
        return author;
    }

    Delete(id: string) {
        const author = this.authors.find(author => author.id == id);
        this.authors = this.authors.filter(author => author.id != id);
        return author;
    }
}
