import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AuthService } from './auth-service';

@Component({
    selector: 'sign-up',
    template: `
        
        <div class="sp-page-container">
            <div class="sp-page-head">
                <img src="assets/about-us.jpg"  alt="">
                <div class="sp-page-title">
                <h1>Sign up</h1>
                </div>
            </div>
            <div class="container form-content">
                <form novalidates [formGroup]="user" (ngSubmit)="createUser(user.value)" >
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" formControlName="email" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" formControlName="password" placeholder="password">
                    </div>
                    <button type="submit" class="btn btn-primary">Sign up</button>
                </form>
            </div>
        </div>
    `,
    styles: [
        `.sp-page-head{
            background-color: #35414C;
            width: 100%;
            height: 250px;
            overflow: hidden;
            border-radius: 0px 0px 0px 200px;
        }
        img{
            width: 100%;
            opacity: 0.1;
        }
        .form-content{
            max-width: 600px;
            margin: 50px auto;
        }
        .sp-page-title{
            position: absolute;
            top: 200px;
            right: 50px;
        }
        .sp-page-title h1{
            color: #fff;
            font-size: 2rem;
        }
        `
    ]
})
export class SignUpComponent implements OnInit {
    private user: FormGroup;

    constructor(private fb:FormBuilder, private authService:AuthService) {
        this.user = fb.group({
            email: "",
            password: ""
        });
     }

     createUser(user:User){
        this.authService.signUp(user);

     }

    ngOnInit() { }

}