import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { CheckOutService } from '../services/check-out.service';
import { MailService } from '../services/mail.service';
import { Location } from '@angular/common';
import { iCart } from '../models/cart.model';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


@Component({
    selector: 'side-cart',
    template:`
        <div class="side-cart">
            <h1><i class="fa fa-shopping-cart" aria-hidden="true"></i> Your Basket <strong>{{sumCart|currency:"GBP":true}}</strong></h1>
            <div class="wrapper">
                <div *ngFor="let cart of cartproduct">

                    <div class="row container">
                        <div class="qty col col-xs-1">{{cart.qty}}x</div>
                        <div class="pname col col-xs-6">{{cart.name}}</div>
                        <div class="price col col-xs-2"><p>{{cart.price | currency: 'GBP' :true}}</p></div>
                        <p class="remove-cart"><i (click)="removeItem(cart.$key)" class="fa fa-times remove-cart-i" aria-hidden="true"></i></p>
                        <hr>
                    </div>
                    
                </div>
                
            </div>
            <p class="saved-purchase">you saved {{sumOldCart - sumCart |currency:"GBP":true}}</p>
            <a *ngIf="cartproduct.length > 0" routerLink="/cart"><p>See Full Cart</p></a>
        </div>
        <div *ngIf="cartproduct.length > 0" routerLink="/checkout" class="check-out"><p>Check Out</p></div>
    `,
    styles: [`
    p i{color:#f48024;}
        .qty,.pname,.price{
            font-size: 13px;
            color:lightslategray;
            margin:0px;
        }
        .qty{
            
        }
        .price p{
            color:lightslategrey;
        }
        .side-cart{ 
            margin-top: 10px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            
            border-color: lightslategrey;
            padding-bottom: 20px;
            
        }
        .wrapper{
            position: relative;
            max-height: 250px;
            overflow: scroll;
        }
        .remove-cart{
            position: absolute;
            right: 5px;
        }
        h1{
            padding: 10px 5px;
            font-size: 18px;
            color: #fff;
            background-color: lightslategrey;
        }
        h1 strong{
            color:#f48024;
        }
        p{
            text-align: left;
            padding: 0px;
            margin:0px;
            margin: 5px 10px;
            font-size: 14px;
        }
        .check-out{
            background-color:#f48024; 
            margin: 0px;
            padding:0px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        .check-out p{
            text-align:center;
            padding: 10px;
            font-size: 18px;
            font-family: 'Satisfy', cursive;
            letter-spacing: 3px;
            color:#fff;
        }
        .saved-purchase{
            border-top: 1px solid;
            border-color: #f48024; 
            padding-top: 10px;
        }
       
     `]
})
export class CartSideComponent implements OnInit {
    cartproduct = [];
    sumCart;
    sumOldCart;
    accepTerms:boolean = false;
    liginAlert:boolean = false;
   
   
    constructor(private cartService:CheckOutService, private _location:Location,
    private _router:Router, private _elementRef:ElementRef,
    private _mailSender:MailService) { }

   
    moveTopayment(){
        this._router.navigate(["/checkout"]);
        this.liginAlert =true;
    }

    removeItem(key){
        // this.cartService.removeItem(key);
    }
    
    clearCart(){
        // this.cartService.clear();
    }
     sumCartPrice(cart){
        let priceArr = [];
        let oldPrice = [];
             cart.forEach(element=>{
            priceArr.push(element.price * element.qty);
            oldPrice.push(element.oldprice * element.qty);
        });
        
        this.sumCart = priceArr.reduce(this.sumTotal, 0);
        this.sumOldCart = oldPrice.reduce(this.sumTotal, 0);
        
    }

    sumTotal(sum, num){
        return sum + num;
    }


    ngOnInit() {
        //Only allowed user if they logged in
        // if(!localStorage.getItem('currentUser')){
        //     this._router.navigate(["/login"])
        //     return
        // }
        // this.cartService.getCart()
        //     .subscribe(cart=>{
        //         this.cartproduct = cart;
        //         this.sumCartPrice(cart);
        //     });
        
        
     }
  
}