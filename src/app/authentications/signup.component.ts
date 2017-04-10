import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AuthService } from './auth-service';

function passwordMather(c:AbstractControl){
    return c.get('password').value === c.get('confirm').value
    ? null : {'nomatch': true};
}

@Component({
    selector: 'sign-up',
    templateUrl: './signup.component.html',
    styleUrls: ['./auth.stylesheet.scss']
})
export class SignUpComponent implements OnInit {
    private user: FormGroup;
    errMsg;

    constructor(private fb:FormBuilder, private authService:AuthService, private router:Router) {
        this.user = fb.group({
            email: "",
            password: "",
            confirm: ""
        }, {validator: passwordMather});
     }

     createUser(user:User){
        this.authService.signUp(user)
        .then(success=>{
                console.log("Successfully Created user account");
                this.router.navigate(['/']);
                this.authService.authChange();
                this.authService.authUserChange()
                    .subscribe(signUser=>{
                        this.authService.createAccount(signUser.uid, signUser.auth.email);
                    });
                // console.log(success);
            }).catch(err=>{
                this.errMsg = err.message;
                console.log(this.errMsg);
            });

     }
     

    ngOnInit() {
        
     }

}