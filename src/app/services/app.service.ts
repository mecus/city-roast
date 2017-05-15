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

    // apiUrl = "http://localhost:3000/posts";

    constructor(private af:AngularFire, private _http:Http) { }

    public subscription(subscribe){
        let fb_ref = this.af.database.list("/subscriptions");
            fb_ref.push(subscribe).then((res)=>{
                console.log(res);
            }).catch(error=>console.log(error));
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
        return this.af.database.list('/contacts');
        
    }
    getContacts(){
        return this.af.database.list('/contacts');
    }
    deleteContact(key){
        let db = this.af.database.list('/contacts/'+key);
            db.remove().then((res)=>{console.log(res)})
                        .catch(error=>console.log(error));
    }

}