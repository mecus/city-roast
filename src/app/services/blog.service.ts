import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { iBlog } from '../models/blog.model';

@Injectable()

export class BlogService {
    cacheBlog$;
    constructor(private _af:AngularFireAuth, 
        private _router:Router, private _http:Http,
        private db:AngularFireDatabase
    ){
        this.cacheBlog$ = new ReplaySubject(1);
    }


    createBlog(blog){
        let blogRef = this.db.list("blogs");
            blogRef.push(blog).then((res)=>{console.log(res)});
    }

    getBlog(){
        return this.db.list("/blogs").valueChanges();
    }
    getCacheBlog(){
        if(!this.cacheBlog$.observers.length){
           this.db.list("/blogs").snapshotChanges()
                .map(snapshot=>{
                    let blog = [];
                    snapshot.forEach(doc=>{
                        blog.push({data: doc.payload.val(), key: doc.payload.key});
                    })
                    return blog;
                }).subscribe(
                    blog => this.cacheBlog$.next(blog),
                    err => {
                        this.cacheBlog$.error(err);
                        this.cacheBlog$ = new ReplaySubject(1);
                    }
                );
        }
        return this.cacheBlog$;
    }
    updateBlog(key, object){
        let blogRef = this.db.list("blogs");
            blogRef.update(key, object);
    }
    deleteBlog(blog){
        let blogRef = this.db.list("blogs");
            blogRef.remove(blog.key).then((res)=>{
                this.removeBlogImage(blog.data.image);
                console.log(res);
            }).catch(error=>console.log(error));
    }
    removeBlogImage(file){
        // var desertRef = firebase.storageRef.child('images/desert.jpg');
        let storageRef = firebase.storage().ref('/blogimages/'+file); 
        // Delete the file
        storageRef.delete().then(() => {
          // File deleted successfully
          console.log("Image Successfully Removed");
        }).catch(function(error) {
          console.log(error);
        });
    }

}