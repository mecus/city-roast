import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class AppService {

    constructor(private af:AngularFire) { }

    getImages(){
        let storage = firebase.storage().ref();
        let imageUrl = storage.child('/images/');
        // return imageUrl.getDownloadURL();
    }

}