import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Product } from '../models/product.model';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

    // apiUrl = "http://localhost:3000/posts";

    constructor(private af:AngularFireAuth,
        private db: AngularFireDatabase,
        private _http:Http) { }

    public subscription(subscribe){
        let fb_ref = this.db.list("subscriptions");
            fb_ref.push(subscribe).then((res)=>{
                console.log(res);
            });
        return fb_ref;
    }

    getImages(){
        let storage = firebase.storage().ref();
        let imageUrl = storage.child('/images/');
        // return imageUrl.getDownloadURL();
    }
    // getApiData():Observable<any[]>{
    //     let header = new Headers();
    //         header.append("Content-Type", "application/vnd.api+json");

    //     return this._http.get(this.apiUrl)
    //         .map((res:Response)=>  res.json());
            
    // }
    addContact(){
        return this.db.list('contacts');
        
    }
    getContacts(){
        return this.db.list('contacts').valueChanges();
    }
    deleteContact(key){
        let db = this.db.list('contacts/'+key);
            db.remove().then((res)=>{console.log(res)})
                        .catch(error=>console.log(error));
    }

}