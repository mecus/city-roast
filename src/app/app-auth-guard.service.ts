import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './authentications/auth-service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService:AuthService, private router:Router, public af:AngularFire) { }

    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
        console.log('AuthGuard Service implemented');
       let url: string = state.url;
        
        return this.checkAdmin(url);
    }
    //AuthGuard for Products // Access Admin Only
    checkAdmin(url:string):boolean{
        let isAmin:boolean;
         if(localStorage.getItem('idToken')){
            this.authService.getAccount(localStorage.getItem('idToken'))
            .subscribe(acUser=>{
                    acUser.forEach(adm=>{
                    if(adm.isAmin == true ){
                        console.log("True Admin");
                        isAmin = true;
                    }
                });
                
            });
            
            return isAmin; 
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }




    checkLogin(url:string):boolean{
        this.af.auth.subscribe((currentUser)=>{
            console.log(currentUser);
            if(currentUser.auth.email){
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