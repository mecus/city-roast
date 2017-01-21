import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AuthService } from './auth-service';

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
    
            <div class="container form-content">
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
                    <div class="container but-ton">
                        <button type="submit" class="btn btn-primary">Login</button>
                        or <span routerLink="/signup">Sign up</span>
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
        `
    ]
})
export class LoginComponent implements OnInit {
    user:FormGroup;
    constructor(private fb:FormBuilder, private authService:AuthService, private router:Router ) {

        this.user = fb.group({
            email: "",
            password: ""
        });
     }
     loginUser(user:User){
         if(user){
            this.authService.logIn(user);
         }
     }

    ngOnInit() { }

}