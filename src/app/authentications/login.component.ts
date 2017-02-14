import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AuthService } from './auth-service';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./auth.stylesheet.scss']
})
export class LoginComponent implements OnInit {
    dashboard:boolean =false;
    logUser:boolean =false;
    anoUser:boolean = false;
    user:FormGroup;
    errMsg;
    constructor(private fb:FormBuilder, private authService:AuthService, 
    private router:Router, private cartService:CartService ) {

        this.user = fb.group({
            email: "",
            password: ""
    
        });
     }
     openDash(){
         this.dashboard = true;
     }
     loginUser(user:User){
         
         if(user){
            // this.logOutAnonymous();
            this.authService.logIn(user)
            .then(success=>{
                console.log('Authentication Allowed');
                // this.isAuthenticated = true;
                this.router.navigate(['/']);
                // location.reload();
                
            }).catch(err=>{
                this.errMsg = err;
                console.log(err);
            });
         }
         this.authService.authChange();
     }
     //==LogOut Anonymous not in use==//
     logOutAnonymous(){
         this.cartService.clear();
         let auth = firebase.auth();
            auth.signOut().then(
            success=> {console.log(success);
                console.log("Anonymous logged out")
                localStorage.clear();
                
            }
            )
            .catch(
                err=> console.log(err)
            );
     }
    
     logAnonymous(){
        if(!localStorage.getItem('idToken')){
            this.authService.logAnonymous()
                .then(success=>{
                //==This section runs to save the current user to the local-storage==//
                this.authService.authChange();
                this.router.navigate(['/']);
                })
                .catch(error=>console.log(error));
            } 
        }

    userChange(){
         this.authService.authUserChange().subscribe(
             user=>{
                 if(user != null){
                    if(user.auth.isAnonymous){
                        this.anoUser = true;
                    }else
                    if(user.auth.email){
                      this.logUser = true;  
                    }
                 }
                 
             }
         );
        
    }

    ngOnInit() {
        this.userChange()

        // this.logUser = localStorage.getItem('currentUser');
     }

}