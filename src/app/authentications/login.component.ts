import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from "firebase/app"
import { User } from '../models/user.model';
import { AuthService } from './auth-service';
import { CheckOutService } from '../services/check-out.service';

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

    //Resetting Pasword
    showPassword:boolean = false;
    successPassword:boolean = false;

    constructor(private fb:FormBuilder, private authService:AuthService, 
    private router:Router, private cartService:CheckOutService, private _location: Location ) {

        this.user = fb.group({
            email: "",
            password: ""
    
        });
     }
     openDash(){
         this.dashboard = true;
     }
     showPasswordPage(){
         this.showPassword = true;
     }
     closePasswordPage(){
         this.showPassword = false;
     }
     sendLink(email){
         if(email.includes('@')){
            this.authService.resetPasswordLink(email);
            this.showPassword = false;
            this.successPassword = true;
         }
     }

     loginUser(user:User){

         if(user){
            // this.logOutAnonymous();
            this.authService.logIn(user)
            .then(success=>{
                console.log('Authentication Allowed');
                // this.isAuthenticated = true;
                this.authService.authChange();
                this._location.back();
                // this.router.navigate(['/']);      
                // location.reload();
                
            }).catch(err=>{
                this.errMsg = err;
                console.log(err);
            });
         }
        //  this.authService.authChange();
     }
     //==LogOut Anonymous not in use==//
    //  logOutAnonymous(){
    //      this.cartService.clear();
    //      let auth = firebase.auth();
    //         auth.signOut().then(
    //         success=> {console.log(success);
    //             console.log("Anonymous logged out")
    //             localStorage.clear();
                
    //         }
    //         )
    //         .catch(
    //             err=> console.log(err)
    //         );
    //  }
    
    //  logAnonymous(){
    //     if(!localStorage.getItem('idToken')){
    //         this.authService.logAnonymous()
    //             .then(success=>{
    //             //==This section runs to save the current user to the local-storage==//
    //             this.authService.authChange();
    //             this.router.navigate(['/']);
    //             })
    //             .catch(error=>console.log(error));
    //         } 
    // }

    userChange(){
         this.authService.authUserState().subscribe(
             user=>{
                 if(user != null){
                    if(user.isAnonymous){
                        this.anoUser = true;
                    }else
                    if(user.email){
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