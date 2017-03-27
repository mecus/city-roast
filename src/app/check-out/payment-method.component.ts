import { Component, OnInit, HostListener } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CustomerOrder } from '../models/order.model';
import { Observable } from 'rxjs/Observable';
import { iOrder } from '../models/order.model';
import { Md5 } from 'ts-md5/dist/md5';
import { SHA1 } from '../services/functions';
import { Router } from '@angular/router';
// import { objectHash } from './dist/object_hash';

@Component({
    selector: 'pay-method',
    templateUrl: './payment-method.component.html',
    styleUrls: ['./styles/stylesheet.scss']
})
export class PaymentMethodComponent implements OnInit {
    cusId;
    orders=[]; //work on the this later
    fieldOk:boolean = false;
    
    hashSign;


    constructor(private cartService:CartService, private _router:Router) {
  
     }

    ngOnInit() { 
        let nform = document.createElement('form');
        let myf = document.getElementById('myform');
        nform.id = "form1";
        nform.name = "form1";
        nform.action = "https://mdepayments.epdq.co.uk/Ncol/Test/orderstandard.asp";
        nform.method = "post";
        nform.appendChild(myf);
        let main = document.getElementById('main-form');
        main.appendChild(nform);

        


        // this.cartService.getCustomerDetails().subscribe((customers)=>{
        //     // console.log(customers.id);
        //     this.cusId = customers.id;
        // });
       


      
        
        this.cartService.getUserOrder().subscribe(order=>{
        
                this.orders = order;
            });
            console.log(this.orders);
            if(this.orders.length > 0){
                let passphrase = "LCRUB3DA172000@#tig";
                // console.log(order.orderId);
                let accpturl = "ACCEPTURL=http://localhost:4200/payment-confirmation"+passphrase;
                let amount = "AMOUNT="+this.orders[0].amount*(100)+passphrase;
                let backurl = "BACKURL=http://localhost:4200/payment-method"+passphrase;
                let cusName ="CN="+this.orders[0].customerName+passphrase;
                let currency ="CURRENCY=GBP"+passphrase;
                let email ="EMAIL="+this.orders[0].email+passphrase;
                let expturl ="EXCEPTIONURL=http://localhost:4200/exception"+passphrase;
                let homeurl ="HOMEURL=http://localhost:4200"+passphrase;
                let language ="LANGUAGE=en_US"+passphrase;
                let orderId ="ORDERID="+this.orders[0].orderId+passphrase;
                let ownaddress ="OWNERADDRESS="+this.orders[0].address+passphrase;
                let owntown ="OWNERTOWN="+this.orders[0].city+passphrase;
                let owncty ="OWNERCTY="+this.orders[0].country+passphrase;
                let ownZip ="OWNERZIP="+this.orders[0].postCode+passphrase;
                let pspdq ="PSPDQ=epdq3027479"+passphrase;
                let title ="TITLE=London City Roast"+passphrase;
                // let shasign = {
                //     "AMOUNT" : order.amount*(100)+passphrase,
                //     "CURRENCY": "GBP"+passphrase,
                //     "LANGUAGE": "en_US"+passphrase,
                //     "ORDERID": order.orderId+passphrase,
                //     "PSPDQ": "epdq3027479"+passphrase
                // };
                
                this.hashSign = SHA1(
                    accpturl+
                    amount+
                    backurl+
                    cusName+
                    currency+
                    email+
                    expturl+
                    homeurl+
                    language+
                    orderId+
                    ownaddress+
                    owncty+
                    owntown+
                    ownZip+
                    pspdq+
                    title
                    ).toUpperCase();

                // let hash = (accpturl+amount+backurl+cusName+currency+
                //     email+homeurl+language+orderId+ownaddress+
                //     ownaddress3+ownZip+pspdq+title)
                let hash = (accpturl+amount+backurl+cusName+currency+email+expturl+
                    homeurl+language+orderId+ownaddress+owncty+owntown+ownZip+pspdq+
                    title);

                let newHash = (accpturl+''+amount+''+currency+''+language+''+orderId+''+pspdq+''+title)
                console.log(this.hashSign);

                let testHash = SHA1(newHash);
                let digest = "3B0878805E3717F355FF73A8C21E5A6AAE29BFEA"

                let calSign = "62A8995FA228F0A0CB4AB981E7F87E7BD9FBC452"

                console.log(hash);
                // console.log(newHash);
                // console.log(testHash);

                this.fieldOk = true;
            }else{
                this._router.navigate(["/order"]) 
            }
        
    
   
    


    }

}