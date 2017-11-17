import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { CheckOutService } from '../services/check-out.service';
import { MailService } from '../services/mail.service';
import { Location } from '@angular/common';
import { iCart } from '../models/cart.model';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { AuthService } from '../authentications/auth-service';
import { CartService } from '../services/cart.service';
declare var $:any;

@Component({
    selector: 'shop-cart',
    templateUrl: 'shopping-cart.component.html',
    styleUrls: ['check-out.module.scss', './check-out-media-query.scss']
})
export class ShoppingCartComponent implements OnInit {
    user = "kam";
    cartproduct = [];
    sumCart = 0;
    sumOldCart;
    accepTerms:boolean = false;
    liginAlert:boolean = false;
    currentuser;
    currentUserLogin: boolean = true;
    carts$;
    pageReload: boolean = false;
    firstPageLoad: boolean = true;
   
    constructor(private _location:Location,
    private _router:Router, private _elementRef:ElementRef,
    private _mailSender:MailService, private authService:AuthService, private cartService:CartService) { }

    @HostListener('change', ['$event']) termsChange($event){
        if($event.target.checked == true){
            this.accepTerms = true;
        }else{this.accepTerms = false}
    }
    moveTopayment(){
        if(this.currentuser){
            this._router.navigate(["/checkout"]);
        }else{
            this.currentUserLogin = false;
        }

        // this.liginAlert =true;
    }
    back(){
        this._location.back();
        // this._router.navigate(["/coffees"]);
    }
    removeItem(key){
        this.pageReload = true;
        setTimeout(()=>{
            this.cartService.removeCart(key);
        }, 400);
        // this.cartService.removeItem(key);
        setTimeout(()=>{
            this.pageReload = false;
        }, 600);
    }
     sumCartPrice(cart){
         console.log(cart);
        // let priceArr = [];
        // let oldPrice = [];
        //      cart.forEach(element=>{
        //          console.log(element);
        //     priceArr.push(element.price * element.qty);
        //     oldPrice.push(element.oldprice * element.qty);
        // });
        
        this.sumCart = _.reduce(cart, this.sumTotal, 0);
        console.log(this.sumCart);
        // this.sumOldCart = oldPrice.reduce(this.sumTotal, 0);
        
    }

    sumTotal(sum, num){
        return sum + num;
    }
    closeWindow(){
        this.currentUserLogin = true;
    }

 
 

    ngOnInit() {
        this.cartService.createDb();
        setTimeout(()=>{
            this.carts$ = this.cartService.retrieveCart()
            .subscribe((data)=>{
                this.cartproduct = data[0];
                this.sumCart = data[1]
                this.sumOldCart = data[2];
                this.firstPageLoad = false;
                // this.paypalCheckOut(data[1]);
            })
       }, 800);
       
        this.authService.authUserState().subscribe(user => {
            if(user){
                this.currentuser = user;
            } 
        });

        // this.paypalCheckOut();

        
        // this.railsOrder = this._mailSender.getorders();

     }
  
}