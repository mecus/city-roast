import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../authentications/auth-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss', 'media-query/menu.query.scss']
})
export class MenuComponent implements OnInit, OnChanges {
    isRedlogo:boolean = false;
    regUser:boolean = false;
    anoUser:boolean = false;
    cartTotal = [];
    totalItem;
    

    previlege: boolean=false;
    loginAlert:boolean = false;

    isImenu:number = 0;
    isMenuIcon:boolean = true;
    loginDraw:number = 0;
    closeWind:boolean=false;


    constructor(private authService:AuthService, private cartService:CartService, private router:Router) { }
    openDrawer(){
        this.loginDraw = 150;
        this.closeWind = true;
    }
    closeDrawer(){
        this.loginDraw = 0;
        this.closeWind = false;
    }
    openMenu(){
        this.isImenu = 100;
        this.isMenuIcon = false;
    }
    closeMenu(){
        this.isImenu = 0;
        this.isMenuIcon = true;
    }
    changeLogo(){
        setInterval(()=>{
            this.isRedlogo = true;
        }, 10000);
        setInterval(()=>{
            this.isRedlogo = false;
        }, 15000)
    }
    registerUser(){
        this.loginAlert = false;
        this.router.navigate(["/signup"])
    }
    loginUser(){
        this.loginAlert = false;
        this.router.navigate(["/login"])
    }
    closeWindow(){
        this.loginAlert = false;
    }

    signOut(){
        if(this.anoUser){
          this.cartService.clear();
        //   this.cartService.deleteCustomerDetails(); 
        }
        this.authService.logOut();
        
    }
    notifyLogin(){
        
    }
    logAnonymous(){
        if(!localStorage.getItem('idToken')){
            this.authService.logAnonymous()
                .then(success=>{
                //==This section runs to save the current user to the local-storage==//
                this.loginAlert = false;
                this.authService.authChange();
                // this.router.navigate(['/']);
                })
                .catch(error=>console.log(error));
            } 
        }

    getCartTotal(){
        this.cartService.getCart()
            .subscribe(cart=>{
                cart.forEach((cart)=>{
                  this.cartTotal.push(cart.qty);
                  this.totalItem = this.cartTotal.reduce((sum, num)=>{
                      return sum + Math.ceil(num);
                  }, 0)
                });
                
            });
    }
    ngOnChanges(){

    }
  
    userChange(){
         this.authService.authUserChange().subscribe(
             user=>{
                 if(user != null){
                    if(user.auth.isAnonymous){
                        this.anoUser = true;
                    }else
                    if(user.auth.email){
                      this.regUser = true;  
                    }
                 }
             }
         );
    }

    timer;
    clearTimer(){
        clearInterval(this.timer)
    }

    ngOnInit() { 
        this.userChange();
        
        this.getCartTotal();
      
        
      
        
        // this.authService.authChange();
        // this.regUser = localStorage.getItem('currentUser');
        this.changeLogo();
       
        this.timer = setInterval(()=>{
                if(localStorage.getItem('idToken')){
                this.authService.getAccount(localStorage.getItem('idToken'))
                .subscribe(adm=>{
                    // console.log(adm.isAdmin);
                        if(adm.isAdmin == true ){
                            this.previlege = true;
                            console.log("Admin truthy");
                            this.clearTimer();
                        }else{
                            this.previlege = false;
                        }
                });
                
            }
            
        }, 1500);
    
       
        setTimeout(()=>{
            if(!localStorage.getItem('idToken')){
                this.loginAlert = true;
            }
        }, 50000);
    }

}