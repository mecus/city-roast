import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as firebase from 'firebase';
import 'rxjs/add/operator/toPromise';

import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
    rdata;
    cachesProduct$;
   
    constructor(private db:AngularFireDatabase, private route:ActivatedRoute, private router:Router) {
        this.cachesProduct$ = new ReplaySubject(1);
     }


    //==Retrieving Products from the FireBase Database==//
    getProduct():Observable<Product[]>{
       return this.db.list('products').valueChanges();

    }
    getProductWithId(){
        let colls = this.db.list('products').snapshotChanges();
        return colls.map(snapshot => {
            let data=[];
            snapshot.forEach(docs=>{
                data.push({data: docs.payload.val(), key: docs.payload.key});
            })
            return data;
        });
    }
    oneProduct(id:number | string){
        return this.db.list('products').valueChanges()
        .subscribe((products)=>{
            products.find((product)=> product = product === +id) });
            
        
    }
    getCacheProduct(){
        if(!this.cachesProduct$.observers.length){
           this.getProduct().subscribe(
               product => this.cachesProduct$.next(product),
               err => {
                if(err){
                    this.cachesProduct$.error(err);
                    this.cachesProduct$ = new ReplaySubject(1);
                }
           });
        }
        return this.cachesProduct$;
    }

    //==Adding Product to the List==//
    addProduct(product:Product){
        let db = this.db.list('products');
       return db.push(product);
    }
    //==Deleting Single Product form the List==//
    removeProduct(key, file?){
        let db = this.db.list('products');
        db.remove(key).then(function(res){
            console.log(res);
            if(file){
                this.removeProductImage(file)
            }
            
        }).catch(function(err){
            console.log(err);
        });
        
    }
    //==Updating Product section==//
    getUpdateVal(data){
        this.rdata = data;
    }
    updateProduct(key, data){
        console.log('Updating product with key: '+key);
        console.log('............')
        let dbRef = this.db.object('products/'+key);

        dbRef.update(data).then(res=>{
            console.log('product updated');
        }).catch(err=>{
            console.log(err);
        });
    }
  
    removeProductImage(file){
        let storageRef = firebase.storage().ref('/images/products/'+file);
        storageRef.delete().then(res=>{
            console.log("Image Deleted Successfully");
        }).catch(err=>console.log(err));
    }
       


}