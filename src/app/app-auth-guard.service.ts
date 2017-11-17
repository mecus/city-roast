import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './authentications/auth-service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate {
    adminUser:boolean;
    constructor(private authService:AuthService, private router:Router, public af:AngularFireAuth) {
      
     }

    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
        console.log('AuthGuard Service implemented');
        let url: string = state.url;
        return this.checkAdmin(url); 
  
    }
    //AuthGuard for Products // Access Admin Only
    checkAdmin(url:string):boolean {
        if(!localStorage.getItem('idToken')){
            return false;
         }
         if(localStorage.getItem('idToken')){
            this.authService.getAccount(localStorage.getItem('idToken'))
            .subscribe(adm=>{
                    if(adm['isAdmin'] == true ){
                        console.log("True Admin");
                        this.adminUser = true;
                    }else{
                        console.log("False Admin");
                        this.adminUser = false;
                    }
            });
            this.authService.redirectUrl = url;
            return this.adminUser;
        }
        this.router.navigate(['/']);
        return false;

    }

    checkLogin(url:string):boolean{
        this.af.authState.subscribe((currentUser)=>{
            console.log(currentUser);
            if(currentUser.email){
                if(this.authService.isAuthenticated){
                return true;
            }
            return true
            }
        });
        
        if(localStorage.getItem('currentUser')){
            if(this.authService.isAuthenticated){
            return true;
         }
         return true;
        }
        
        this.authService.redirectUrl = url;

        this.router.navigate(['/login']);
        return false;
    }

}