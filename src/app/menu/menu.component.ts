import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../authentications/auth-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CheckOutService } from '../services/check-out.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';



@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss', 'media-query/menu.query.scss']
})
export class MenuComponent implements OnInit {
    isRedlogo:boolean = false;
    regUser:boolean = false;
    anoUser:boolean = false;
    currentuser;
    cartTotal;
    totalItem = 90;
    previlege: boolean=false;
    loginAlert:boolean = false;
    isImenu:number = 0;
    isMenuIcon:boolean = true;
    loginDraw:number = 0;
    closeWind:boolean=false;

    constructor(private authService:AuthService, private cartService:CartService, private router:Router) {

     }
    public productCategory(){
        this.router.navigate(["products/?", {category: "coffees", dispay: "true"}]);
    }
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
        this.authService.logOut().then((res)=>{
            let update ={
                uid: localStorage.getItem('idToken'),
                status: 'off'
            }
            this.authService.updateAccount(update)
            .then(res=>{
                console.log("Account Updated After SignOff")
                localStorage.removeItem('idToken');
            })
            .catch(err=>console.log(err));
            localStorage.removeItem('userId');
            localStorage.removeItem('currentUser');
            if(localStorage.getItem('returnId')){
                localStorage.removeItem('returnId');
            }
            if(localStorage.getItem('displayName')){
                localStorage.removeItem('displayName');
            }
            this.regUser = false;
            this.anoUser = false;
            this.previlege = false;
            
        }, (error)=>{
            console.log(error);
        });

        setTimeout(()=>{
            
            this.router.navigate(["/login"]);
        }, 1000)
        // this.router.navigate(["/login"]);
    }
    userChange(){
         this.authService.authUserState().subscribe(
             user=>{
                 if(user != null){
                    if(user.isAnonymous){
                        this.anoUser = true;
                    }else
                    if(user.email){
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
    stripMail(email){
        let regx = /[A-Za-z]+\.?-?[A-Za-z]/
        return email = regx;
    }
    reloadMenu(){
        this.previlege = this.authService.isAuthenticated;
    }

    ngOnInit() {
        this.authService.getAdminUser();
        setTimeout(()=>{
            this.previlege = this.authService.isAuthenticated;
            console.log(this.previlege);
        }, 2000);  
        this.cartService.createDb();
        setTimeout(()=>{
            this.cartService.retrieveCart()
            .subscribe(carts=>{
                this.cartTotal = carts[1];
            });
        }, 1200);
      
        let domEl = document.getElementById("menu-header");
        let brandEl = document.getElementById("brand");
        window.addEventListener('scroll', (e)=>{
            let yPos = window.pageYOffset;
            if(yPos > 100){
                domEl.style.opacity = "1";
                domEl.style.transition = ".3s";
                brandEl.style.backgroundColor = "#35414C";
                brandEl.style.transition = "1.2s";
            }else{
                domEl.style.transition = ".3s";
                domEl.style.opacity = "0";
                brandEl.style.background = "transparent";
                brandEl.style.transition = "1.2s";
            }
        });
        this.userChange();
       
        // this.getCartTotal();
        // this.timer = setInterval(()=>{
        //    this.userChanges();
        // }, 1500);
     
        
        // this.authService.authChange();
        // this.regUser = localStorage.getItem('currentUser');
        this.changeLogo();

        this.currentuser = this.stripMail(localStorage.getItem('currentUser'));
    }

    // userChanges(){
    //     console.log("Checking user presence");
    //     if(localStorage.getItem('idToken')){
    //         this.authService.getAccount(localStorage.getItem('idToken'))
    //         .subscribe(adm=>{
    //             if(adm){
    //                 // console.log(adm["isAdmin"]);
    //                 if(adm["isAdmin"] == true ){
    //                     this.previlege = true;
    //                     // console.log("Admin truthy");
    //                     this.clearTimer();
    //                 }else{
    //                     this.previlege = false;
    //                     this.clearTimer();
    //                 }
    //             }else{
    //                 this.clearTimer();
    //                 return 0;
    //             }
    //         });
            
    //     }
    //     return this.clearTimer();
    // }
}