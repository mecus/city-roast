import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../authentications/auth-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges {
    isRedlogo:boolean = false;
    currentuser;
    cartTotal = [];
    totalItem;
    constructor(private auth:AuthService, private cartService:CartService) { }

    changeLogo(){
        setInterval(()=>{
            this.isRedlogo = true;
        }, 10000);
        setInterval(()=>{
            this.isRedlogo = false;
        }, 15000)
    }

    signOut(){
        this.auth.logOut();
    }
    getCartTotal(){
        this.cartService.getCart()
            .subscribe(cart=>{
                cart.forEach((cart)=>{
                  this.cartTotal.push(cart.qty);
                  this.totalItem = this.cartTotal.reduce((sum, num)=>{
                      return sum + Math.round(num);
                  }, 0)
                });
                
            });
    }
    ngOnChanges(){

    }
    ngOnInit() { 
        this.currentuser = localStorage.getItem('currentUser');
        this.auth.authChange();
        this.changeLogo();
        this.getCartTotal();
        
    }

}