import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { iCart } from '../models/cart.model';
import { Customer } from '../models/customer-details.model';

@Injectable()
export class CartService {
    productArr = [];
    userId;
    
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
                customerId: customer.customerId,
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email,
                telephone: customer.telephone,
                addressOne: customer.addressOne,
                addressTwo: customer.addressTwo,
                postCode: customer.postCode,
                city: customer.city,
                country: "United Kingdom",

                deliveryOne: customer.deliveryOne,
                deliveryTwo: customer.deliveryTwo,
                deliveryCode: customer.deliveryCode,
                deliveryCity: customer.deliveryCity,
                deliveryCountry: "United Kingdom",
                deliveryTrue: customer.deliveryTrue, //check if billing address is the same as delivery

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

    // Creating New Order
    createOrder(customer, shipping, items, amount){
        this.getUser();
       let newOrder = {
            orderId: customer.orderId,
            customerName: customer.customerName,
            email: customer.email,
            telephone: customer.telephone,
            address: customer.address,
            postCode: customer.postcode,
            city: customer.city,
            shipping: shipping,
            amount: amount,
            
       }
   
        if(this.userId){
            let db = this.af.database.list('/orders/'+this.userId);
            db.push(newOrder).then(res=>{ 
                console.log(res.key);
                if(res.key){
                    let dbp = this.af.database.list('/orders/'+this.userId + '/' +res.key + '/items/');
                    items.forEach((item)=>{
                        console.log(item);
                        dbp.push({
                            name: item.name,
                            type: item.type,
                            qty: item.qty,
                            size: item.size,
                            price: item.price
                        }).then(res=> res).catch(err=>console.log(err));
                    })
   
                }
            })
            .catch(err=>console.log(err));

            
        }else{
            console.log("user don't exit");
        }
    }
    //Retrieving Order from the database
    getOrder(){
       return this.af.database.list('/orders/'+this.userId);
    }
}