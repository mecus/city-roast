import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Location } from '@angular/common';
import { iCart } from '../models/cart.model';
import { Router } from '@angular/router';


import { AngularFire, FirebaseAuthState, 
    AuthMethods, AuthProviders, 
    FIREBASE_PROVIDERS } from 'angularfire2';

@Component({
    selector: 'shop-cart',
    templateUrl: 'shopping-cart.component.html',
    styleUrls: ['check-out.module.scss', './check-out-media-query.scss']
})
export class ShoppingCartComponent implements OnInit {
    user = "kam";
    cartproduct = [];
    sumCart;
    accepTerms:boolean = false;
    constructor(private cartService:CartService, private _location:Location,
    private af:AngularFire, private _router:Router, private _elementRef:ElementRef) { }

    @HostListener('change', ['$event']) termsChange($event){
        if($event.target.checked == true){
            this.accepTerms = true;
        }else{this.accepTerms = false}
    }
    moveTopayment(){
        this._router.navigate(["/checkout"]);
    }
    back(){
        this._location.back();
    }
    removeItem(key){
        this.cartService.removeItem(key);
    }
    clearCart(){
        this.cartService.clear();
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


    // paypalCheckOut(){
    //     window['paypal'].Button.render({
        
    //         env: 'sandbox', // Optional: specify 'sandbox' environment
        
    //         client: {
    //             sandbox:    'ARBSCUiDOABkb_xriEZ3hIfQuU_acaJF7v_gd5hg660xW-totw0wbIhdH4ZKh1XaJSn2KTx8H4FTRv4O',
    //             // production: 'xxxxxxxxx'
    //         },

    //         payment: function() {
            
    //             var env    = this.props.env;
    //             var client = this.props.client;
            
    //             return window['paypal'].rest.payment.create(env, client, {
    //                 transactions: [
    //                     {
    //                         amount: { total: "25", currency: 'GBP' }
        
    //                     }
    //                 ]
    //             });
    //         },

    //         commit: true, // Optional: show a 'Pay Now' button in the checkout flow

    //         onAuthorize: function(data, actions) {
            
    //             // Optional: display a confirmation page here
            
    //             return actions.payment.execute().then(function() {
    //                 // Show a success page to the buyer
    //             });
    //         }

    //     }, '#paypal-button');
    // }
 

    ngOnInit() {
        this.cartService.getCart()
            .subscribe(cart=>{
                this.cartproduct = cart;
                this.sumCartPrice(cart);
            });
        
        // this.sumCart = this.cartService.sumCart();
        // console.log(this.sumCart);
        if(localStorage.getItem('currentUser')){
            this.user = localStorage.getItem('userId');
        }

        // this.paypalCheckOut();

        
        
     }
  
}