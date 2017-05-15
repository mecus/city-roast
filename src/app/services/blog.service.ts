import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { iBlog } from '../models/blog.model';

@Injectable()

export class BlogService {
    constructor(private _af:AngularFire, private _router:Router, private _http:Http ){}


    createBlog(blog):Observable<iBlog[]>{
        let blogRef = this._af.database.list("/blogpost");
            blogRef.push(blog).then((res)=>{console.log(res)})
            .catch(error=>console.log(error));
        return blogRef;
    }

    getBlog():Observable<iBlog[]>{
        let blogRef = this._af.database.list("/blogpost");
        return blogRef;
    }
    updateBlog(key, object){
        let ref = firebase.database().ref();
        let blogRef = ref.child("/blogpost/"+key);
            blogRef.update(object).then((res)=>{
                console.log(res);
            }).catch(error=>console.log(error));
    }
    deleteBlog(key){
        let blogRef = this._af.database.list("/blogpost/"+key);
            blogRef.remove().then((res)=>{
                console.log(res);
            }).catch(error=>console.log(error));
    }

}