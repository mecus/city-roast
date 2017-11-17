import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import 'rxjs/add/operator/toPromise';

import { Product } from '../models/product.model';

@Injectable()

export class TestService {


    constructor(private db:AngularFireDatabase) { }

    public getTestProduct(){
        return this.db.list('testproducts');
    }
     addProduct(product:Product){
        let db = this.db.list('testproducts');
        db.push(product).then((res)=>{
            console.log('Product Created Successfully');
        });
    }

    updateProduct(key, data){
        console.log('Updating product with key: '+key);
        console.log('............')
        let dbRef = firebase.database().ref('testproducts/'+key);
        dbRef.update(data).then(res=>{
            console.log('product updated');
        }).catch(err=>{
            console.log(err);
        });
    }
}