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
    errMsg;
    cLength;
  

    constructor(private af:AngularFire, private router:Router, private cartService:CartService) { }

    public storeAuthState(authState:FirebaseAuthState):FirebaseAuthState {
        if(authState){
            // this.isAuthenticated = true;
            if(authState){
            localStorage.setItem('currentUser', (authState.auth.email));
            localStorage.setItem('idToken', (authState.uid));
            localStorage.setItem('userId', (authState.auth.uid));
            // localStorage.setItem('anonymous',(authState.auth.isAnonymous))
            }
        }
        return authState;
    }

    signUp(user:User){
        if(user){
            console.log("creating user account");
           return this.af.auth.createUser({
                email: user.email,
                password: user.password
            })
        }
    }
    createAccount(uId){
         let dbRef = this.af.database.list('accounts/'+uId);
         dbRef.push({isAmin: false})
                .then(success=>{console.log("User Account Created successfully "+success)})
                .catch(error=>{console.log("something went wrong "+error)});
     }
     getAccount(uId){
         return this.af.database.list('accounts/'+uId); 
     }

    logIn(user:User){
        if(user){
            return this.af.auth.login({
                email: user.email,
                password: user.password
            })
        }
    }

    logOut(){
        
        // let D = window.confirm("Do you want to empty your shopping basket?");
        // if(D==true){
        //     this.cartService.clear();
        // }
        
        this.af.auth.logout();
        localStorage.removeItem('userId');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('idToken');
        location.reload();
        
        // this.router.navigate(['/login']);
    }

    // cartLength(){
    //     this.cartService.getCart()
    //         .subscribe(res=>{
    //             this.cLength = res;
    //             console.log(this.cLength);
    //         });
    // }
    
    authChange(){
        this.af.auth.subscribe((newUser)=>{
            if(!localStorage.getItem('currentUser') && newUser ){
                this.storeAuthState(newUser);
                console.log('user saved in the storage');
            }
            if(newUser){
                console.log(newUser.auth.getToken());
                console.log('User Currently LoggedIn');

                console.log(newUser);
            }else{
                console.log('No User LoggedIn');
            }
        });
       
    }
    
    logAnonymous(){
        let auth = firebase.auth();
        return auth.signInAnonymously();
    }
   authUserChange(){
       //checking for current user LoggedIn==//
      return this.af.auth;
   }

}