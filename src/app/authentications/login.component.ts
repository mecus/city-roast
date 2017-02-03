import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

import { User } from '../models/user.model';
import { AuthService } from './auth-service';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'login',
    template: `
        
        <div class="lp-page-container">
            <div class="lp-page-head">
                <img src="assets/slider-access-control-jpg.jpeg"  alt="">
                <div class="lp-page-title">
                <h1>Login</h1>
                </div>
            </div>
            <div *ngIf="!anoUser" class="container logged-in">
                <div class="jumbotron">
                    <h5>You have already logged in.. please refresh the page</h5>
                    <button routerLink="/" class="btn btn-success">Keep Browsing </button>
                </div>
            </div>
    
            <div *ngIf="anoUser" class="container form-content">
            <div class="container login-head">
                <h4>Login</h4>
                <p>Please login with your email and password</p>
            </div>
            
                <form novalidates [formGroup]="user" (ngSubmit)="loginUser(user.value)">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" formControlName="email" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" formControlName="password" placeholder="password">
                    </div>
                    <div class="alert alert-danger" role="alert" *ngIf="errMsg">
                        <strong>{{errMsg.message}}</strong>
                    </div>
                    <div class="container but-ton">
                        <button type="submit" class="btn btn-primary">Login</button>
                        or <span > <a routerLink="/signup"> Sign up </a></span>
                    </div>
                </form>
            </div>
        </div>
    `,
    styles: [
        `.lp-page-head{
            background-color: #35414C;
            width: 100%;
            height: 200px;
            overflow: hidden;
            border-radius: 0px 0px 0px 150px;
        }
        img{
            width: 100%;
            opacity: 0.1;
            margin-top: -200px;
        }
        .form-content{
            max-width: 600px;
            margin: 50px auto;
        }
        .lp-page-title{
            position: absolute;
            top: 160px;
            right: 50px;
        }
        .lp-page-title h1{
            color: #fff;
            font-size: 2rem;
        }
        .lp-page-title h1{
            color: lightslategray;
            font-size: 1.5rem;
            margin-right: 15px;
        }
        .form-content{
            min-height: 500px;
        }
        .login-head{
            text-align: center;
            margin-bottom: 30px;
        }
        .login-head p{
            color: lightslategray;
        }
        .but-ton{
            margin: 50px 0px;
            text-align: center;
        }
        .logged-in{
            height: 700px;
            margin: 0 auto;
            text-align: center;
            
        }
        .logged-in h5{
            text-align: center;
            
        }
        .jumbotron{
            // width: 500px;
            margin: 100px;
        }
        `
    ]
})
export class LoginComponent implements OnInit {
    logUser;
    anoUser:boolean = false;
    user:FormGroup;
    errMsg;
    constructor(private fb:FormBuilder, private authService:AuthService, 
    private router:Router, private af:AngularFire, private cartService:CartService ) {

        this.user = fb.group({
            email: "",
            password: ""
        });
     }
     loginUser(user:User){
         
         if(user){
            this.logOutAnonymous();
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
      userChange(){
         this.af.auth.subscribe(
             user=>{
                 if(user.auth.isAnonymous){
                     this.anoUser=true;
                 }
             }
         );
        
        }
    ngOnInit() {
        if(localStorage.getItem('idToken')){this.userChange()}

        this.logUser = localStorage.getItem('currentUser');
     }

}