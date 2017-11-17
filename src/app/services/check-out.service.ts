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
export class CheckOutService {
    currentUser;
    productArr = [];
    userId;
    apiUrl2 = "http://localhost:3000/orders"; 
    apiUrl = "https://mailer-server.herokuapp.com/orders";
    apiCoffee = "https://mailer-server.herokuapp.com/coffees";
    
    constructor(private af:AngularFireAuth,
        private db: AngularFireDatabase,
        private router:Router, private _http:Http) { 
       
        af.authState.subscribe(user=>{
            if(user){
                this.currentUser = user;
            }
        })
    }

    getUser(){
        if(localStorage.getItem('userId')){
            this.userId = localStorage.getItem('userId');
            this.af.authState.subscribe(user=>{
                if(user){
                    this.userId = user.uid;
                }
         });
        }  
    }
    // addCart(product, num, blend){
    //     this.getUser();
    //     if(this.userId){
    //         let cart:iCart = {
    //             id: product.id,
    //             name: product.name,
    //             price: product.price,
    //             oldprice: product.oldprice,
    //             qty: num,
    //             size: product.size,
    //             type: blend,
    //             // roast: roast,
    //             imageUrl: product.imageUrl
    //         }
    //         let dbr = this.db.list('/cart/'+this.userId);
    //         dbr.push(cart).then(res=>{
    //             console.log(res);
    //         });
    //     }

    // }
    // incrementQty(cartItem, num, blend?){
    //     let key = cartItem.$key;
    //     let qty = parseInt(cartItem.qty);
    //     let cart, thisblend;
    //     this.getCart().subscribe(cartArr=>{
    //         cartArr;
    //         // cart = cartArr.find((cart)=> cart.id === cartItem.id);
    //         // thisblend = cartArr.find((cart)=> cart.type === blend);
    //     });
    //     this.addCart(cartItem, num, blend);
    //     // if(thisblend !== blend){
    //     //     if(num){
    //     //        this.getUser();
    //     //         firebase.database().ref().child('/cart/'+this.userId+'/'+cart.$key)
    //     //         .update({qty: parseInt(cart.qty) + parseInt(num)}).then(res=>{res}).catch(err=>{err}); 
    //     //     }else{
    //     //         this.getUser();
    //     //         firebase.database().ref().child('/cart/'+this.userId+'/'+cart.$key)
    //     //         .update({qty: cart.qty + 1}).then(res=>{res}).catch(err=>{err});
    //     //     }
    //     // }else{
    //     //    this.addCart(cartItem, num, blend, roast);
    //     // }
    // }
    // removeItem(key){
    //     this.getUser();
    //     let db = this.db.list('/cart/'+this.userId);
    //     db.remove(key).then(res=>{
    //         console.log(res);
    //     }).catch(err=>{
    //         console.log(err);
    //     });
    // }
    // clear(){
    //     this.getUser();
    //     let db = this.db.list('/cart/'+this.userId);
    //     db.remove().then(res=>{
    //         console.log(res);
    //     }).catch(err=>{
    //         console.log(err);
    //     });
    // }
    // getCart(){
    //     this.getUser();
    //     return this.db.list('cart/'+this.userId).valueChanges();
  
    // }

    // sumCart():Observable<iCart[]>{
        
    //     this.db.list('cart').valueChanges()
    //         .subscribe(cart=>{
    //             this.productArr = cart;
    //         });
    //     let priceArr = [];
    //         this.productArr.forEach(element=>{
    //         priceArr.push(element.price);
    //     });
        
    //     return priceArr.reduce(this.sumTotal, 0);
        
    // }

    // sumTotal(sum, num){
    //     return sum + Math.round(num);
    // }

    //Saving Customer Details
    saveCustomerDetails(customer, lastId?){
        this.getUser();
        if(this.userId){
            let createdDate = new Date().toString();
            let customerDetails = {
                id: lastId,
                // customerId: customer.customerId,
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email.toLowerCase(),
                gender: customer.gender,
                telephone: customer.telephone,
                addressOne: customer.addressOne,
                addressTwo: customer.addressTwo,
                postCode: customer.postCode.toUpperCase(),
                city: customer.city,
                country: "United Kingdom",
                created_at: createdDate,

                // deliveryOne: customer.deliveryOne,
                // deliveryTwo: customer.deliveryTwo,
                // deliveryCode: customer.deliveryCode,
                // deliveryCity: customer.deliveryCity,
                // deliveryCountry: "United Kingdom",
                // deliveryTrue: customer.deliveryTrue, //check if billing address is the same as delivery

            }
            let dbr = this.db.object('/customers/'+this.userId);
                dbr.set(customerDetails)
                    .then((res)=>{
                        console.log("Customer Saved");
                    })
                    .catch(error=>{console.log(error)});

            setTimeout(()=>{this.sortCustomer(customer)},500);
            
        }
        
    }
    sortCustomer(customer){
        //check if customer exist?
        let selectedCustomer
        this.getAllCustomerDetails().subscribe((customers)=>{
            // selectedCustomer = customers.filter((xcustomer)=> {return xcustomer.email == customer.email});
            
        });
        if(selectedCustomer.length > 1){
            let key = selectedCustomer[0].$key;
            // console.log(selectedCustomer);
            // console.log(key);
            let dbR = this.db.list('customers');
                dbR.remove(key).then(res=>console.log(res)).catch(error=>console.log(error));
        }
    }
  
    updateCustomerDetails(customer){
        this.getUser();
        if(!customer){return}
        
        let customerUpdate = {
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            gender: customer.gender,
            telephone: customer.telephone,
            addressOne: customer.addressOne,
            addressTwo: customer.addressTwo,
            postCode: customer.postCode,
            city: customer.city,
            country: "United Kingdom"
        }

        let dbR = this.db.list('/customers');
            dbR.update(this.userId, customer)
                .then(res=>{console.log(res +"Customer Saved")})
                .catch(error=>{console.log(error)});

    }


    getCustomerDetails(){
        this.getUser();
        return this.db.object('customers/'+this.userId).valueChanges();
    }
    getAllCustomerDetails(){
        return this.db.list('customers').valueChanges();
    }

    deleteCustomerDetails(id){
        this.getUser();
        let cusDb = this.db.list('customers');
        cusDb.remove(id).then(res=> res).catch(err=> console.log(err))
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
                    "customerid": customer.customerId,
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
            let dbR = this.db.list('/allorders/orders/');
            dbR.push(newOrder).then(res=>{ 
                console.log(res);

                //Saving Ordered items
                if(res){
                    let dbp = this.db.list('/allorders/orderedItems/');
                    items.forEach((item)=>{
                        console.log(item);
                        dbp.push({
                            customerId: customer.customerId,
                            orderId: order_id,
                            name: item.name,
                            type: item.type,
                            qty: item.qty,
                            size: item.size,
                            // roast: item.roast,
                            price: item.price,
                            image: item.imageUrl
                        }).then(res=> res);
                    })
                }
            });

            //Saving Order for Current_User
            let udb = this.db.list('/allorders/userorders/'+this.userId);
                udb.push(newOrder).then(res=>{ 
                console.log(res);
            });
            // .catch(err=>console.log(err));
    
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
        let udb = this.db.list('/allorders/userorders/'+this.userId);
        let u2db = this.db.list('/allorders/orders/'+key1);

        udb.remove().then((res)=>{console.log(res)})
                    .catch((error)=>{console.log(error)});
        u2db.remove().then((res)=>{console.log(res)})
                    .catch((error)=>{console.log(error)});

    }

    //Retrieving Order from the database
    getOrder(){
        this.getUser();
        return this.db.list('/allorders/orders/').valueChanges();
    }
    getUserOrder(){
        this.getUser();
        return this.db.list('/allorders/userorders/'+this.userId).valueChanges();
    }
    deleteOrder(){
        this.getUser();
        let dlDb = this.db.list('/allorders/userorders');
            dlDb.remove(this.userId).then(response=> console.log(response))
                        .catch(error=>console.log(error));
    }
    deleteAllOrder(key){
        let oRdb = this.db.list('/allorders/orders');
        oRdb.remove(key).then((res)=>console.log(res)).catch((error)=>console.log(error));
    }
    //Creating Admin control delete function
    deleteAdminOrder(uid, key){
        let oRdb = this.db.list('/allorders/orders');
        oRdb.remove(key).then((res)=>console.log(res)).catch((error)=>console.log(error));

        let dlDb = this.db.list('/allorders/userorders');
            dlDb.remove(uid).then(response=> console.log(response))
                        .catch(error=>console.log(error));

    }

    //Retrieving Order Items and Deleting them
    getOrderItems(){
       return this.db.list('/allorders/orderedItems').valueChanges();

    }

    deleteOrderItems(key){
        console.log(key);
        let refItem = this.db.list('/allorders/orderedItems');
            refItem.remove(key).then(res=>console.log(res))
                            .catch(error=>console.log(error));
     
    }
    //Creating final Order in the Rails Server
    finalOrder(body){
        let headers = new Headers();
        // headers.append("Content-Type", "application/vnd.api+json");
        // headers.append("Authorisation", "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTIwNzQ1MDIsInN1YiI6M30.nC3jG2gXHsYZc4b6PdUZ0YQOpD54okXRwBER7o2VS0o")
        return this._http.post(this.apiUrl, body, this.postRequestHeaders()).map((res:Response)=> res.json());
    }
    //Creating Coffee items 
    makeCoffee(coffee){
        this._http.post(this.apiCoffee, coffee, this.postRequestHeaders()).map((res:Response)=>res.json())
            .subscribe(res=> console.log(res));
    }
    getFinalOrder():Observable<iOrder[]>{
        return this._http.get(this.apiUrl, this.getRequestHeaders()).map((res:Response)=> res.json().data);
    }
    patchFinalOrder(key){
        let update = {"data":{"type": "orders", "id": key, "attributes":{"status":"completed"}}};
        return this._http.patch(this.apiUrl+'/'+key, update, this.postRequestHeaders())
                .map((res:Response)=>res.json());
    }
    //Deleting a single Order
    deleteFinalOrder(id){
        return this._http.delete(this.apiUrl+"/"+id,  this.postRequestHeaders()).map((res:Response)=> res.json());
    }
    public getRequestHeaders(){
        // let authTest = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTIwNzQ1MDIsInN1YiI6M30.nC3jG2gXHsYZc4b6PdUZ0YQOpD54okXRwBER7o2VS0o';
        let headers = new Headers({'Authorization':AUTHORIZATION, 'Content-Type': 'application/vnd.api+json', 'Accept':'application/vnd.api+json'});
        let options = new RequestOptions({headers:headers});
        return options;

    }
    public postRequestHeaders(){
        let headers = new Headers({'Authorization':AUTHORIZATION, 'Content-Type': 'application/vnd.api+json', 'Accept':'application/vnd.api+json'});
        let options = new RequestOptions({headers:headers});
        return options;
    }
    
}