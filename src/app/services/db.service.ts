import { Injectable } from '@angular/core';


@Injectable()


export class DbService {
    request;
    constructor(){
    }
    createDb(name, v){
        return this.request = indexedDB.open(name, v);
    }
}