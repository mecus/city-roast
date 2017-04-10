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
    // apiUrl2 = "http://localhost:3000/orders"; 
    apiUrl = "https://mailer-server.herokuapp.com/orders";
    apiCoffe = "https://mailer-server.herokuapp.com/coffees";
    
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
    addCart(product, num){
        this.getUser();
        if(this.userId){
            let cart:iCart = {
                id: product.id,
                name: product.name,
                price: product.price,
                qty: num,
                size: product.size,
                type: product.blend,
                roast: product.roast,
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
    incrementQty(cartItem, num?){
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
           this.addCart(cartItem, num);
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
        this.getUser();
        let db = this.af.database.list('/cart/'+this.userId);
        db.remove().then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        });
    }
    getCart():Observable<iCart[]>{
        this.getUser();
        return this.af.database.list('cart/'+this.userId);
  
    }

    sumCart():Observable<iCart[]>{
        
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
    saveCustomerDetails(customer, lastId){
        this.getUser();
        if(this.userId){
            let createdDate = new Date().toString();
            let customerDetails = {
                id: lastId,
                // customerId: customer.customerId,
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email,
                telephone: customer.telephone,
                addressOne: customer.addressOne,
                addressTwo: customer.addressTwo,
                postCode: customer.postCode,
                city: customer.city,
                country: "United Kingdom",
                created_at: createdDate,

                deliveryOne: customer.deliveryOne,
                deliveryTwo: customer.deliveryTwo,
                deliveryCode: customer.deliveryCode,
                deliveryCity: customer.deliveryCity,
                deliveryCountry: "United Kingdom",
                deliveryTrue: customer.deliveryTrue, //check if billing address is the same as delivery

            }
            let db = this.af.database.object('/customers/'+this.userId);
                db.set(customerDetails)
                    .then(res=>{console.log("Customer Saved")})
                    .catch(error=>{console.log(error)});

        }
        
    }
    updateCustomerDetails(customer){
        this.getUser();
        if(!customer){return}
        
        let customerUpdate = {
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            telephone: customer.telephone,
            addressOne: customer.addressOne,
            addressTwo: customer.addressTwo,
            postCode: customer.postCode,
            city: customer.city,
            country: "United Kingdom"
        }

        let db = this.af.database.object('/customers/'+this.userId);
            db.update(customer)
                .then(res=>{console.log(res +"Customer Saved")})
                .catch(error=>{console.log(error)});

    }


    getCustomerDetails(){
        this.getUser();
        return this.af.database.object('customers/'+this.userId);
    }
    getAllCustomerDetails(){
        return this.af.database.list('customers/');
    }

    deleteCustomerDetails(){
        this.getUser();
        let cusDb = this.af.database.list('customers/'+this.userId);
        cusDb.remove().then(res=> res).catch(err=> console.log(err))
    }

    // Creating New Order
    createOrder(customer, shipping, items, amount, order_id){
        this.getUser();
        let orderDate = new Date().toString();
        let newOrder = {
                itemsId: order_id,
                customerId: customer.customerId,
                orderId: customer.orderId, // Generate order id from the order model
                customerName: customer.customerName,
                email: customer.email,
                telephone: customer.telephone,
                address: customer.address,
                postCode: customer.postcode,
                city: customer.city,
                country: customer.country,
                shipping: shipping,
                amount: amount,
                orDate: orderDate,
                status: "Incomplete",
                
        }
        // Rails Api Order Creation
        let body = {"data": {"type":"orders",
                    "attributes":{
                    "name": customer.customerName,
                    "email": customer.email,
                    "telephone": customer.telephone,
                    "address": customer.address,
                    "postcode": customer.postcode,
                    "city": customer.city,
                    "country": customer.country,
                    "amount": amount,
                    "orderid": customer.orderId,
                    "status": "Pending",
                    "itemsid": order_id
        }}}

        this.finalOrder(body).subscribe((res)=>{
            console.log(res.data);
            localStorage.setItem("returnId", res.data.id);
            // items.forEach((item)=>{
            //    this.makeCoffee({"data":{"type": "coffees",
            //         "attributes": {
            //         "order_id": res.data.id,
            //         "name": item.name,
            //         "blend": item.type,
            //         "qty": item.qty,
            //         "size": item.size,
            //         "roast": item.roast,
            //         "price": item.price
            //         }
            //     }});
            // });
        });
   
        if(this.userId){
            //Saving Orders
            let db = this.af.database.list('/allorders/orders/');
            db.push(newOrder).then(res=>{ 
                console.log(res);

                //Saving Ordered items
                if(res){
                    let dbp = this.af.database.list('/allorders/orderedItems/');
                    items.forEach((item)=>{
                        console.log(item);
                        dbp.push({
                            customerId: customer.customerId,
                            orderId: order_id,
                            name: item.name,
                            type: item.type,
                            qty: item.qty,
                            size: item.size,
                            roast: item.roast,
                            price: item.price,
                            image: item.imageUrl
                        }).then(res=> res).catch(err=>console.log(err));
                    })
                }
            })
            .catch(err=>console.log(err));

            //Saving Order for Current_User
            let udb = this.af.database.list('/allorders/userorders/'+this.userId);
                udb.push(newOrder).then(res=>{ 
                console.log(res);
            })
            .catch(err=>console.log(err));
    
        }else{
            console.log("user don't exit");
        }
    }
    //Updating Order Records after a successful Transactions
    public updateOrder(key1, key2, status){
        this.getUser();
        firebase.database().ref().child('/allorders/orders/'+key2)
            .update(status).then((complete)=>{complete})
                            .catch((error)=> console.log(error));
        
        firebase.database().ref().child('/allorders/userorders/'+this.userId+"/"+key1)
            .update(status).then((complete)=>{complete})
                            .catch((error)=> console.log(error));

            //Adding rails patch update function here
    }


    //Clearing all Order for the Customer
    clearOrders(key1, key2){
        let udb = this.af.database.list('/allorders/userorders/'+this.userId);
        let u2db = this.af.database.list('/allorders/orders/'+key1);

        udb.remove().then((res)=>{console.log(res)})
                    .catch((error)=>{console.log(error)});
        u2db.remove().then((res)=>{console.log(res)})
                    .catch((error)=>{console.log(error)});

    }

    //Retrieving Order from the database
    getOrder(){
        this.getUser();
        return this.af.database.list('/allorders/orders/');
    }
    getUserOrder(){
        this.getUser();
        return this.af.database.list('/allorders/userorders/'+this.userId);
    }
    deleteOrder(){
        this.getUser();
        let dlDb = this.af.database.list('/allorders/userorders/'+this.userId);
            dlDb.remove().then(response=> console.log(response))
                        .catch(error=>console.log(error));
    }
    deleteAllOrder(key){
        let oRdb = this.af.database.list('/allorders/orders/'+key);
        oRdb.remove().then((res)=>console.log(res)).catch((error)=>console.log(error));
    }



    //Retrieving Order Items and Deleting them
    getOrderItems(){
       return this.af.database.list('/allorders/orderedItems/');

    }

    deleteOrderItems(key){
        console.log(key);
        let refItem = this.af.database.list('/allorders/orderedItems/'+key);
            refItem.remove().then(res=>console.log(res))
                            .catch(error=>console.log(error));
     
    }
    //Creating final Order in the Rails Server
    finalOrder(body){
        let headers = new Headers();
        headers.append("Content-Type", "application/vnd.api+json");
        return this._http.post(this.apiUrl, body, {headers: headers}).map((res:Response)=> res.json());
    }
    //Creating Coffee items 
    makeCoffee(coffee){
        let headers = new Headers();
        headers.append("Content-Type", "application/vnd.api+json");
        this._http.post(this.apiCoffe, coffee, {headers:headers}).map((res:Response)=>res.json())
            .subscribe(res=> console.log(res));
    }
    getFinalOrder(){
        return this._http.get(this.apiUrl).map((res:Response)=> res.json().data);
    }
    patchFinalOrder(key){
        let headers = new Headers();
        let update = {"data":{"type": "orders", "id": key, "attributes":{"status":"completed"}}}
        headers.append("Content-Type", "application/vnd.api+json");
        return this._http.patch(this.apiUrl+'/'+key, update, {headers:headers})
                .map((res:Response)=>res.json());
    }
    
}