import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { User } from '../models/user.model';
import { AuthService } from './auth-service';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'reset-password',
    templateUrl: './password-reset.component.html',
    styleUrls: ['./auth.stylesheet.scss']
})
export class PasswordResetComponent implements OnInit {
    user:FormGroup;
    errMsg;
    constructor(private fb:FormBuilder, private authService:AuthService, 
    private router:Router, private cartService:CartService, private route:ActivatedRoute ) {

        this.user = fb.group({
            password: "",
            repeat_password: ""
    
        });
     }

     reAuthenticateUser(){
        let user = firebase.auth().currentUser;
        let credential = {provider: "password", email: "", password: ""};

        // Prompt the user to re-provide their sign-in credentials

        user.reauthenticate(credential).then(()=> {
            // User re-authenticated.
            }, function(error) {
            // An error happened.
        });
     }
     
 
    ngOnInit() {
      

        // this.logUser = localStorage.getItem('currentUser');
     }

}