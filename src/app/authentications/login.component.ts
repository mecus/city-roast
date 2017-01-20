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
                <img src="assets/about-us.jpg"  alt="">
                <div class="lp-page-title">
                <h1>Login</h1>
                </div>
            </div>
            <div class="container form-content">
                <form novalidates [formGroup]="user" (ngSubmit)="loginUser(user.value)">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" formControlName="email" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" formControlName="password" placeholder="password">
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
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
        .form-content{
            min-height: 500px;
        }
        `
    ]
})
export class LoginComponent implements OnInit {
    user:FormGroup;
    constructor(private fb:FormBuilder, private authService:AuthService) {

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