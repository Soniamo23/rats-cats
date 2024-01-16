import { Injectable } from '@nestjs/common';
import {Cat} from 'src/cats/interfaces/cat.interfaces'
@Injectable()
export class CatService {
    private readonly cats: Cat[] = [];
    create(cat: Cat) {
        this.cats.push(cat);
    }
    findAll():Cat[]{
        return this.cats;
    }
}
