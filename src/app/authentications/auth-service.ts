import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, 
    AuthMethods, AuthProviders, 
    FIREBASE_PROVIDERS } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import * as firebase from 'firebase';

import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { CartService } from '../services/cart.service';

@Injectable()

export class AuthService {
    isAuthenticated: boolean = false;
    redirectUrl: string;
  

    constructor(private af:AngularFire, private router:Router, private cartService:CartService) { }

    public storeAuthState(authState:FirebaseAuthState):FirebaseAuthState {
        if(authState){
            // this.isAuthenticated = true;
            if(authState){
            localStorage.setItem('currentUser', (authState.auth.email));
            localStorage.setItem('idToken', (authState.uid));
            localStorage.setItem('userId', (authState.auth.uid));
            }
        }
        return authState;
    }

    signUp(user:User){
        if(user){
            console.log("creating user account");
            this.af.auth.createUser({
                email: user.email,
                password: user.password
            }).then(success=>{
                console.log("Successfully Created user account");
                this.router.navigate(['/login']);
                this.authChange();
            }).catch(err=>{
                console.log("user account can't be created.. check your details")
            });
        }
    }

    logIn(user:User){
        if(user){
            this.af.auth.login({
                email: user.email,
                password: user.password
            }).then(success=>{
                console.log('Authentication Allowed');
                // this.isAuthenticated = true;
                this.router.navigate(['/home']);
                // location.reload();
                this.authChange();
            }).catch(err=>{
                console.log(err);
            });
        }
    }

    logOut(){
        let D = window.confirm("Do you want to empty your shopping basket?");
        if(D==true){
            this.cartService.clear();
        }
        this.af.auth.logout();
        localStorage.removeItem('userId');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('idToken');
        location.reload();
        
        // this.router.navigate(['/login']);
         

    }
    authChange(){
        this.af.auth.subscribe((newUser)=>{
            if(!localStorage.getItem('currentUser') && newUser ){
                this.storeAuthState(newUser);
                console.log('user saved in the storage');
            }
            if(newUser){
                console.log(newUser.auth.getToken());
                console.log('User Currently LoggedIn');
            }else{
                console.log('No User LoggedIn');
            }
        });
       
    }

}