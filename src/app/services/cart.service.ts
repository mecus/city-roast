import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';

import { iCart } from '../models/cart.model';
import { Customer } from '../models/customer-details.model';

@Injectable()
export class CartService {
    productArr = [];
    userId;
    worldpayUrl = "https://api.worldpay.com/v1/orders";
    constructor(private af:AngularFire, private router:Router, private _http:Http) { 
       
    }

    getUser(){
        if(localStorage.getItem('userId')){
            this.userId = localStorage.getItem('userId');
            this.af.auth.subscribe(user=>{
            this.userId = user.uid;
         });
        }  
    }
    addCart(product, size, num, type){
        this.getUser();
        if(this.userId){
            let cart:iCart = {
                id: product.id,
                name: product.name,
                price: product.price,
                qty: num,
                size: size,
                type: type,
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
    incrementQty(cartItem, size?, num?, type?){
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
           this.addCart(cartItem, size, num, type);
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


    //Saving Customer Details
    saveCustomerDetails(customer){
        this.getUser();
        if(this.userId){
            let customerDetails = {
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email,
                telephone: customer.telephone,
                addressOne: customer.addressOne,
                addressTwo: customer.addressTwo,
                postCode: customer.postCode,
                county: customer.county,
                country: "United Kingdom",

            }
            let db = this.af.database.list('/customers/'+this.userId);
                db.push(customerDetails)
                    .then(res=>{console.log(res +"Customer Saved")})
                    .catch(error=>{console.log(error)});
        }
        
    }
    getCustomerDetails(){
        this.getUser();
        return this.af.database.list('customers/'+this.userId);
    }

    deleteCustomerDetails(){
        this.getUser();
        let cusDb = this.af.database.list('customers/'+this.userId);
        cusDb.remove().then(res=> res).catch(err=> console.log(err))
    }
    // Creating Order
    createOrder(data):Observable<Customer>{
        let body = JSON.stringify(data)
        let headers = new Headers({'Content-Type': 'application/json', 'Authorisation': 'T_S_663dac67-6e1c-4f9b-bbf4-8e2a2305d838'});
        let options = new RequestOptions({headers: headers});
        return this._http.post(this.worldpayUrl, body, options)
            .map((res:Response) => res.json())
            
            
    }
}