import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../authentications/auth-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CartService } from '../services/cart.service';
import { AngularFire } from 'angularfire2';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges {
    isRedlogo:boolean = false;
    regUser;
    anoUser:boolean = false;
    cartTotal = [];
    totalItem;
    constructor(private auth:AuthService, private cartService:CartService, private af:AngularFire) { }

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
  
    authChange(){
         this.af.auth.subscribe(
             user=>{
                 if(user.auth.isAnonymous){
                     this.anoUser = true;
                 }
             }
         );
        
    }

    ngOnInit() { 
        // this.userNow();
        if(localStorage.getItem('idToken')){
            this.authChange();
        }
    
        this.getCartTotal();
        this.auth.authChange();
        this.regUser = localStorage.getItem('currentUser');
        this.changeLogo();


        
        
    }

}