import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as Rx from 'rxjs/Rx';
import * as _ from 'lodash';
import { DbService } from './db.service';

@Injectable()


export class CartService {
    subject$;
    db;
    request;
    cartAry = [];
    newPrice = [];
    oldPrice = [];
    newPriceSum;
    oldPriceSum;
    constructor(private _router:Router, private dbService:DbService){
        this.subject$ = new Rx.ReplaySubject(1);
        const dbName = "CityDb";
        this.request = indexedDB.open(dbName, 1);
        // this.createDb();
    }
    createDb () {
        // onupgradeneeded Only run once 
        this.request.onupgradeneeded = (event) => {
            this.db = null;
            this.db = event.target['result'];
            console.log(event);
              // Create an objectStore for this database
            if(this.db){
                let objectStore = this.db.createObjectStore("carts", { keyPath: "id", autoIncrement : true });
                objectStore.createIndex("pid", "pid", { unique: true });
                objectStore.createIndex("id", "id", { unique: true });
            }else{
                console.log("ObjectStore can not be created");
            }

        };    
        this.request.onerror = (event) => {
            console.error(event);
            // Do something with request.errorCode!
        };
        this.request.onsuccess = (e) => {
            this.db = e.target['result'];
            console.log(this.db);
        }

    }
    createCart(cat){
        // console.log(cat);
        let transaction = this.db.transaction(["carts"], "readwrite");
        let store = transaction.objectStore("carts");
        let index = store.index("pid");
        index.get(cat.pid).onsuccess = (e)=>{
            // console.log(e.target.result);
            let updatCat = e.target.result;
            if(updatCat){
                let lasUp = Number(updatCat.qty) + Number(cat.qty);
                updatCat.qty = lasUp;
                // console.log(updatCat);
                let upRequest = store.put(updatCat);
                upRequest.onsuccess = (e)=>{
                    console.log("Updated");
                    this._router.navigate(["/cart"]);
                }
                upRequest.onerror = (e)=>{
                    console.error("Error", e.target.result);
                }
            }else{
                console.log("Creating New Cart");
                let request = store.add(cat);
                request.onsuccess = ((e)=>{
                    console.log("Object Added to IndexedDb");
                    this._router.navigate(["/cart"]);
                });
                request.onerror = ((e)=>{
                    console.error('Error:', e);
                });
            }

        }

       
    }
    retrieveCart(){
        this.cartAry = [];
        this.newPrice = [];
        this.oldPrice = [];
        this.newPriceSum = 0;
        this.oldPriceSum = 0;
        let transaction = this.db.transaction(["carts"], "readonly");
        let store = transaction.objectStore("carts");
        let index = store.index("pid");
        index.openCursor().onsuccess = (e)=>{
            let cursor = e.target.result;
            if(cursor){
                this.cartAry.push(cursor['value']);
                this.newPrice.push(cursor['value'].price * cursor['value'].qty);
                this.oldPrice.push(cursor['value'].oldprice * cursor['value'].qty);
                cursor.continue();
            }
        }
       setTimeout(()=>{
        this.newPriceSum = _.reduce(this.newPrice, this.reduceNum, 0);
        this.oldPriceSum = _.reduce(this.oldPrice, this.reduceNum, 0);
        this.subject$.next([this.cartAry, this.newPriceSum, this.oldPriceSum]);
       },300)
       
        return this.subject$;
    }
    reduceNum(sum, num){
        return sum + num;
    }
    removeCart(key){
        let request = this.db.transaction(["carts"], "readwrite")
            .objectStore("carts")
            .delete(key);

        request.onsuccess = (e) => {
            console.log("Deleted", key);
            this.retrieveCart();
        }
    }
    clearCart(){
        let transaction = this.db.transaction(["carts"], "readwrite");
        let store = transaction.objectStore("carts");
        let CartDeleteRequest = store.clear();
        CartDeleteRequest.onsuccess = (e) => {
            console.log("Cart Table cleared", e);
        }
        CartDeleteRequest.onerror = (e) => {
            console.log(e);
        }
    }
    
}