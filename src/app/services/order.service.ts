import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { AUTHORIZATION } from '../shared/secret';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { iCart } from '../models/cart.model';
import { Customer } from '../models/customer-details.model';
import { iOrder } from '../models/order.model';

@Injectable()

export class OrderService {
    currentUser;
    constructor(private afA: AngularFireAuth, private afDb:AngularFireDatabase){
        this.getUser();
    }
    getUser(){
        this.afA.authState.subscribe(user=>{
            this.currentUser = user;
        });
    }

    getOrder(){
        let uid = localStorage.getItem("userId");
        return this.afDb.list('/orders', ref => ref.orderByChild('customerId')
                                .equalTo(uid).limitToLast(1))
                                .stateChanges();
    }
    getOrders(){
        return this.afDb.list('orders').valueChanges();
    }
    getOrdersWithId(){
        return this.afDb.list('/orders', ref => ref.orderByValue()).snapshotChanges();
    }
    getSingleOrderWithItems(key){
        return this.afDb.object('orders/'+key).valueChanges();
    }
    createOrder(order, shipping, basket, amount){
        let orders = {
            ...order, shipping, amount, basket, createdAt: Date(), status: "pending"
        }
   
        let dbRef = this.afDb.list('orders');
        dbRef.push(orders).then((res)=>{
            console.log(res);
            localStorage.setItem("lastOrderKey", res.key);
            console.log("Order submitted");
            //Send email to the customer
        })
        // console.log(amount);
        // console.log(orders);
        return;
    }
    upDateOrder(key, update){
        let updatObj = {...update, updatedAt: Date()}
        let dbRef = this.afDb.object('orders/'+key);
        dbRef.update(updatObj).then((res)=>{
            console.log("Order Updated");
        }).catch(err=> console.log(err));
    }

    createTransaction(data, orderId?, amount?, name?){
        let transaction = {
            customerName: name,
            intent: data.intent,
            paymentID: data.paymentID,
            payerID: data.payerID,
            paymentToken: data.paymentToken,
            orderId: orderId,
            createdAt: Date(),
            amounts: amount,
            uid: localStorage.getItem("userId"),
        }
        let dbRef = this.afDb.list('sales');
        dbRef.push(transaction).then((res)=>{
            console.log(res);
        }, (err)=>{
            console.log(err);
        })
    }
    getTransactions(){
        return this.afDb.list('sales').valueChanges();

    }
    removeTransaction(key){
        let dbRef = this.afDb.object('sales/'+key);
            dbRef.remove();
    }
}