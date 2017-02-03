import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Product } from '../models/product.model';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

    apiUrl = "http://localhost:3000/posts";

    constructor(private af:AngularFire, private _http:Http) { }

    getImages(){
        let storage = firebase.storage().ref();
        let imageUrl = storage.child('/images/');
        // return imageUrl.getDownloadURL();
    }
    getApiData():Observable<any[]>{
        let header = new Headers();
            header.append("Content-Type", "application/vnd.api+json");

        return this._http.get(this.apiUrl)
            .map((res:Response)=>  res.json());
            
    }

}