import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../authentications/auth-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CartService } from '../services/cart.service';


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
 

    isImenu:number = 0;
    isMenuIcon:boolean = true;
    loginDraw:number = 0;


    constructor(private authService:AuthService, private cartService:CartService) { }
    openDrawer(){
        this.loginDraw = 200;
    }
    closeDrawer(){
        this.loginDraw = 0;
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

    signOut(){
        if(this.anoUser){
          this.cartService.clear();  
        }
        this.authService.logOut();
        
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

    ngOnInit() { 
        this.userChange();
        
        this.getCartTotal();
        // this.authService.authChange();
        // this.regUser = localStorage.getItem('currentUser');
        this.changeLogo();
        if(localStorage.getItem('idToken')){
            this.authService.getAccount(localStorage.getItem('idToken'))
            .subscribe(acUser=>{
                // console.log(acUser[0].isAmin);
                    acUser.forEach(adm=>{
                    if(adm.isAmin == true ){
                        this.previlege = true;
                        console.log("truthy");
                    }
                });
                
            });
        }
       
        
    }

}