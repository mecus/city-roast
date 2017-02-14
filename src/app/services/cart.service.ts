import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import 'rxjs/add/operator/toPromise';

import { iCart } from '../models/cart.model';

@Injectable()
export class CartService {
    productArr = [];
    userId;
    constructor(private af:AngularFire, private router:Router) { 
       
    }

    getUser(){
        if(localStorage.getItem('userId')){
            this.userId = localStorage.getItem('userId');
            this.af.auth.subscribe(user=>{
            this.userId = user.uid;
         });
        }  
    }
    addCart(product, size, num){
        this.getUser();
        if(this.userId){
            let cart:iCart = {
                id: product.id,
                name: product.name,
                price: product.price,
                qty: num,
                size: size,
                imageUrl: product.imageUrl
            }
            let db = this.af.database.list('/cart/'+this.userId);
            db.push(cart).then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            });
        }

    }
    incrementQty(cartItem, size, num?){
        let key = cartItem.$key;
        let qty = parseInt(cartItem.qty);
        let cart;
        this.getCart().subscribe(cartArr=>{
            cartArr;
            cart = cartArr.find((cart)=> cart.id === cartItem.id);
        });
        if(cart){
            if(num){
               this.getUser();
                firebase.database().ref().child('/cart/'+this.userId+'/'+cart.$key)
                .update({qty: parseInt(cart.qty) + parseInt(num)}).then(res=>{res}).catch(err=>{err}); 
            }else{
                this.getUser();
                firebase.database().ref().child('/cart/'+this.userId+'/'+cart.$key)
                .update({qty: cart.qty + 1}).then(res=>{res}).catch(err=>{err});
            }
        }else{
           this.addCart(cartItem, size, num);
        }
    }
    removeItem(key){
        this.getUser();
        let db = this.af.database.list('/cart/'+this.userId);
        db.remove(key).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        });
    }
    clear(){
        let db = this.af.database.list('/cart/'+this.userId);
        db.remove().then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        });
    }
    getCart(){
        this.getUser();
        return this.af.database.list('cart/'+this.userId);
  
    }

    sumCart(){
        
        this.af.database.list('cart')
            .subscribe(cart=>{
                this.productArr = cart;
            });
        let priceArr = [];
            this.productArr.forEach(element=>{
            priceArr.push(element.price);
        });
        
        return priceArr.reduce(this.sumTotal, 0);
        
    }

    sumTotal(sum, num){
        return sum + Math.round(num);
    }

}