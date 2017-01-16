import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import 'rxjs/add/operator/toPromise';

import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
    rdata;
    constructor(private af:AngularFire, private route:ActivatedRoute, private router:Router) { }

    //==Retrieving Products from the FireBase Database==//
    getProduct(){
       return this.af.database.list('products');

    }
    oneProduct(id:number | string){
        return this.af.database.list('products')
        .subscribe((products)=>{
            products.find((product)=> product = product.id === +id) });
            
        
    }

    //==Adding Product to the List==//
    addProduct(product:Product){
        let db = this.af.database.list('products');
        db.push(product).then((res)=>{
            console.log('Product Created Successfully');
        }).catch((err)=>{
            console.log(err);
        });
    }
    //==Deleting Single Product form the List==//
    removeProduct(key){
        let db = this.af.database.list('products/');
        db.remove(key).then(function(res){
            console.log(res);
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
        let dbRef = firebase.database().ref('products/'+key);
        dbRef.update(data).then(res=>{
            console.log('product updated');
        }).catch(err=>{
            console.log(err);
        });
    }
  

       


}