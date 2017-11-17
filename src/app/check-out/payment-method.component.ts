import { Component, OnInit, HostListener, ElementRef, AfterViewInit  } from '@angular/core';
import { CustomerOrder } from '../models/order.model';
import { Observable } from 'rxjs/Observable';
import { iOrder } from '../models/order.model';
import { Md5 } from 'ts-md5/dist/md5';
import { SHA1 } from '../services/functions';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Meta, Title } from '@angular/platform-browser';
import { CartService } from '../services/cart.service';
// import { objectHash } from './dist/object_hash';

@Component({
    selector: 'pay-method',
    templateUrl: './payment-method.component.html',
    styleUrls: ['./styles/stylesheet.scss', 'check-out.module.scss']
})
export class PaymentMethodComponent implements OnInit, AfterViewInit {
    cusId;
    order; //work on this later
    fieldOk:boolean = false;
    spinner:boolean = true;
    hashSign;


    constructor(private cartService:CartService, private _router:Router, 
        private _elementRef:ElementRef, private orderService:OrderService,
        private meta:Meta, private title:Title) {
            title.setTitle('Payment method');
     }

     paymentSubmit(){

     }

    ngOnInit() {
        //Only allowed user if they logged in
        if(!localStorage.getItem('currentUser')){
            this._router.navigate(["/login"])
            return
        }

            this.orderService.getOrder().subscribe(order=>{
                let subFormHolder = document.getElementById('payForm');
                let form = document.getElementById('form10');
                let subForm = document.createElement('form');
                subForm.action = "https://secure.worldpay.com/wcc/purchase";
                subForm.name = "BuyForm";
                subForm.method = "POST"
                subForm.appendChild(form);
                subFormHolder.appendChild(subForm);

                // console.log(order.payload.val());
                this.order = order.payload.val();
                let orders = order.payload.val();
               
                this.paypalCheckOut(orders.amount, orders.orderId, orders.customerName);
                this.spinner = false;
            });

    }

     ngAfterViewInit(){

        let subFormHolder = document.getElementById('payForm');
        let form = document.getElementById('form10');
        let subForm = document.createElement('form');
        subForm.action = "https://secure.worldpay.com/wcc/purchase";
        subForm.name = "BuyForm";
        subForm.method = "POST"
        subForm.appendChild(form);
        subFormHolder.appendChild(subForm);

        // var script = document.createElement("script");
        // script.type = "text/javascript";
        // script.src = "https://cdn.worldpay.com/v1/worldpay.js";
        // this._elementRef.nativeElement.appendChild(script);

    
    }
    paypalCheckOut(sum?, orId?, name?){
        // console.log((sum * 100)/100);
        var amount = (sum * 100)/100;
        window['paypal'].Button.render({
        
            env: 'production', // Optional: specify 'sandbox' environment
        
            client: {
                // sandbox:    'ARBSCUiDOABkb_xriEZ3hIfQuU_acaJF7v_gd5hg660xW-totw0wbIhdH4ZKh1XaJSn2KTx8H4FTRv4O',
                production: 'AetgMPwCaPZvROstlmoRnKbpmAypebALzlzgrzYyXQu4UhqaoP3hxx7mARZcFUj85RnsuC970Dp-ndL4'
            },
            style: {
                color: 'gold',
                size: 'small'
            },

            payment: function() {
            
                var env    = this.props.env;
                var client = this.props.client;
            
                return window['paypal'].rest.payment.create(env, client, {
                    transactions: [
                        {
                            amount: { total: amount, currency: 'GBP' }
        
                        }
                    ]
                });
            },

            commit: true, // Optional: show a 'Pay Now' button in the checkout flow

            onAuthorize: (data, actions)=> {
                // console.log(actions);
                // console.log(data);
                // create transaction here with data
                this.orderService.createTransaction(data, orId, amount, name);
                let key = localStorage.getItem("lastOrderKey");
                this.orderService.upDateOrder(key, {status: "completed"});
                // this.cartService.clearCart();
                this._router.navigate(["/payment-confirmation"]);
                // Optional: display a confirmation page here
            
                return actions.payment.execute().then(()=> {
                    // Show a success page to the buyer
                });
            },
            onCancel: (data, actions)=> {
                this._router.navigate(["/exception"]);
                /* 
                 * Buyer cancelled the payment 
                 */
                console.log(actions);
            },

            onError: (err)=> {
                /* 
                 * An error occurred during the transaction 
                 */
                console.log(err);
                return;
            }

        }, '#paypal-button');
    }

}







        // let nform = document.createElement('form');
        // let myf = document.getElementById('myform');
        // nform.id = "form1";
        // nform.name = "form1";
        // nform.action = "https://mdepayments.epdq.co.uk/Ncol/Test/orderstandard.asp";
        // nform.method = "post";
        // nform.appendChild(myf);
        // let main = document.getElementById('main-form');
        // main.appendChild(nform);
 
// if(orders){
//     let passphrase = "LCRUB3DA172000@#tig";
//     // console.log(order.orderId);
//     let accpturl = "ACCEPTURL=http://www.londoncityroast.com/payment-confirmation"+passphrase;
//     let amount = "AMOUNT="+orders.amount*(100)+passphrase;
//     let backurl = "BACKURL=http://www.londoncityroast.com/payment-method"+passphrase;
//     let cusName ="CN="+orders.customerName+passphrase;
//     let currency ="CURRENCY=GBP"+passphrase;
//     let email ="EMAIL="+orders.email+passphrase;
//     let expturl ="EXCEPTIONURL=http://www.londoncityroast.com/exception"+passphrase;
//     let homeurl ="HOMEURL=http://www.londoncityroast.com"+passphrase;
//     let language ="LANGUAGE=en_US"+passphrase;
//     let orderId ="ORDERID="+orders.orderId+passphrase;
//     let ownaddress ="OWNERADDRESS="+orders.address+passphrase;
//     let owntown ="OWNERTOWN="+orders.city+passphrase;
//     let owncty ="OWNERCTY="+orders.country+passphrase;
//     let ownZip ="OWNERZIP="+orders.postCode+passphrase;
//     let pspdq ="PSPDQ=epdq3027479"+passphrase;
//     let title ="TITLE=London City Roast"+passphrase;
//     // let shasign = {
//     //     "AMOUNT" : order.amount*(100)+passphrase,
//     //     "CURRENCY": "GBP"+passphrase,
//     //     "LANGUAGE": "en_US"+passphrase,
//     //     "ORDERID": order.orderId+passphrase,
//     //     "PSPDQ": "epdq3027479"+passphrase
//     // };
    
//     this.hashSign = SHA1(
//         accpturl+
//         amount+
//         backurl+
//         cusName+
//         currency+
//         email+
//         expturl+
//         homeurl+
//         language+
//         orderId+
//         ownaddress+
//         owncty+
//         owntown+
//         ownZip+
//         pspdq+
//         title
//         );

//     // let hash = (accpturl+amount+backurl+cusName+currency+
//     //     email+homeurl+language+orderId+ownaddress+
//     //     ownaddress3+ownZip+pspdq+title)
//     let hash = (accpturl+amount+backurl+cusName+currency+email+expturl+
//         homeurl+language+orderId+ownaddress+owncty+owntown+ownZip+pspdq+
//         title);

//     let newHash = (accpturl+''+amount+''+currency+''+language+''+orderId+''+pspdq+''+title)
//     console.log(this.hashSign);

//     let testHash = SHA1(newHash);
//     let digest = "3B0878805E3717F355FF73A8C21E5A6AAE29BFEA"

//     let calSign = "62A8995FA228F0A0CB4AB981E7F87E7BD9FBC452"

//     console.log(hash);
//     // console.log(newHash);
//     // console.log(testHash);
//     setTimeout(()=>{
//         this.fieldOk = true;
//     },500);
    
// }else{
//     // this._router.navigate(["/order"]) 
// }