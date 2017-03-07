import { Component, OnInit, HostListener } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CustomerOrder } from '../models/order.model';
import { Md5 } from 'ts-md5/dist/md5';
import { SHA1 } from '../services/functions';
// import { objectHash } from './dist/object_hash';

@Component({
    selector: 'pay-method',
    templateUrl: './payment-method.component.html',
    styleUrls: ['./styles/stylesheet.scss']
})
export class PaymentMethodComponent implements OnInit {

    returnOrder=[];

    hashSign;


    constructor(private cartService:CartService) {
  
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


        this.cartService.getOrder().subscribe(orders=>{
            this.returnOrder = orders;
            console.log(this.returnOrder);
            orders.forEach((order)=>{
                let passphrase = 'LCRUB3DA172000@#tig'
                
                let accpturl = "ACCEPTURL=http://localhost:4200/payment-confirmation"+passphrase
                let amount = "AMOUNT="+order.amount*(100)+passphrase
                let backurl = "BACKURL=http://localhost:4200/payment-method"+passphrase
                let cusName = "CN="+order.customerName+passphrase
                let currency = "CURRENCY=GBP"+passphrase
                let email = "EMAIL="+order.email+passphrase
                let homeurl = "HOMEURL=http://localhost:4200"+passphrase
                let language = "LANGUAGE=en_US"+passphrase
                let orderId = "ORDERID="+order.orderId+passphrase
                let ownaddress = "OWNERADDRESS="+order.address+passphrase
                let ownaddress3 = "OWNERADDRESS3="+order.city+passphrase
                let ownZip = "OWNERZIP="+order.postCode+passphrase
                let pspdq = "PSPDQ=epdq3027479"+passphrase
                let title = "TITLE=London City Roast"+passphrase
                // let shasign = {
                //     "AMOUNT" : order.amount*(100)+passphrase,
                //     "CURRENCY": "GBP"+passphrase,
                //     "LANGUAGE": "en_US"+passphrase,
                //     "ORDERID": order.orderId+passphrase,
                //     "PSPDQ": "epdq3027479"+passphrase
                // };

                this.hashSign = SHA1(
                    accpturl+amount+backurl+cusName+currency+
                    email+homeurl+language+orderId+ownaddress+
                    ownaddress3+ownZip+pspdq+title
                    ).toUpperCase();

                let hash = ((accpturl+amount+backurl+cusName+currency+
                    email+homeurl+language+orderId+ownaddress+
                    ownaddress3+ownZip+pspdq+title).toString())
                
                console.log(this.hashSign);

                console.log(hash);
            })
            
        });
    }

}