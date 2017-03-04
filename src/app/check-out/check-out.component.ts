import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs/Observable';

import { Customer, iCustomer } from '../models/customer-details.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
    selector: 'check-out',
    templateUrl: './check-out.component.html',
    styleUrls: ['./check-out.module.scss', './check-out-form.scss']
})
export class CheckOutComponent implements OnInit, AfterViewInit {
    carts;
    sumCart;
    cusForm;
    customerInput = new Customer;
    constructor(private appService:AppService, private cartService:CartService, 
    private _elementRef:ElementRef, private _fb:FormBuilder, private _router:Router) { 
        this.cusForm = _fb.group(this.customerInput);
    }

  
    saveCustomer(details){
        this.cartService.saveCustomerDetails(details);
        this._router.navigate(['/order']);
    }
     sumCartPrice(cart){
        let priceArr = [];
             cart.forEach(element=>{
            priceArr.push(element.price * element.qty);
        });
        
        this.sumCart = priceArr.reduce(this.sumTotal, 0);
        
    }

    sumTotal(sum, num){
        return sum + num;
    }

    ngOnInit() { 
         this.cartService.getCart().subscribe((cart)=>{
             this.carts = cart;
             this.sumCartPrice(cart)
            //  console.log(this.carts);
         });
       
        
     
  
    }
    ngAfterViewInit(){
        var sDom = document.createElement("script");
        sDom.type = "text/javascript";
        sDom.src = "https://cdn.worldpay.com/v1/worldpay.js";
        this._elementRef.nativeElement.appendChild(sDom);


        window.onload = function() {
            window['Worldpay'].useTemplateForm({
            'clientKey':'T_C_0f545228-59aa-49df-b978-b29a4efcd382',
            'form':'paymentForm',
            'paymentSection':'paymentSection',
            'display':'inline',
            'reusable':true,
            'callback': function(obj) {
                if (obj && obj.token) {
                    console.log(obj);
                    if(localStorage.getItem("cardToken")){
                        localStorage.removeItem("cardToken");
                        localStorage.setItem("cardToken", obj.token);
                    }else{
                        localStorage.setItem("cardToken", obj.token);
                    }
                    
                    
                var _el = document.createElement('input');
                _el.value = obj.token;
                _el.type = 'hidden';
                _el.name = 'token';
                var payClass = this._elementRef.nativeElement.querySelector('paymentForm');
                payClass.appendChild(_el);
                payClass.submit();
                }
            }
            });
        }
    }

}