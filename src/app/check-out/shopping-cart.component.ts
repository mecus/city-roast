import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Location } from '@angular/common';
import { iCart } from '../models/cart.model';

import { AngularFire, FirebaseAuthState, 
    AuthMethods, AuthProviders, 
    FIREBASE_PROVIDERS } from 'angularfire2';

@Component({
    selector: 'shop-cart',
    templateUrl: 'shopping-cart.component.html',
    styleUrls: ['check-out.module.scss']
})
export class ShoppingCartComponent implements OnInit {
    user = "kam";
    cartproduct = [];
    sumCart;
    constructor(private cartService:CartService, private _location:Location,
    private af:AngularFire) { }

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
        return sum + Math.round(num);
    }
   

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
     }
  
}