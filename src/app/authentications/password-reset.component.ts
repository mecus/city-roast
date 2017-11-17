import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';
import * as firebase from "firebase/app";
import { User } from '../models/user.model';
import { AuthService } from './auth-service';
import { CheckOutService } from '../services/check-out.service';


@Component({
    selector: 'reset-password',
    templateUrl: './password-reset.component.html',
    styleUrls: ['./auth.stylesheet.scss']
})
export class PasswordResetComponent implements OnInit, AfterViewInit {
    user:FormGroup;
    succMsg:boolean = false;
    queryparams;
    accountEmail: string ="me@gmail.com";
    auth = firebase.auth();
    constructor(private fb:FormBuilder, private authService:AuthService, 
    private router:Router, private cartService:CheckOutService, private route:ActivatedRoute ) {

        this.user = fb.group({
            password: ""
        });
     }

    reAuthenticateUser(newPassword) {
        // var accountEmail;
        // Verify the password reset code is valid.
        this.auth.verifyPasswordResetCode(this.queryparams.oobCode).then(function(email) {
            // this.accountEmail = email;
            console.log("Account varified");
            // TODO: Show the reset screen with the user's email and ask the user for
            // the new password.

            // Save the new password.
            
        }).catch(function(error) {
            // Invalid or expired action code. Ask user to try to reset the password
            // again.
            console.log(error);
            return;
        });
        this.auth.confirmPasswordReset(this.queryparams.oobCode, newPassword.password).then((resp)=> {
            // Password reset has been confirmed and new password updated.
            console.log(resp)
            console.log("password was reset successfuly");
            this.succMsg = true;
            // this.router.navigate(["/login"]);
            // TODO: Display a link back to the app, or sign-in the user directly
            // if the page belongs to the same domain as the app:
            // auth.signInWithEmailAndPassword(accountEmail, newPassword);
            }).catch(function(error) {
            // Error occurred during confirmation. The code might have expired or the
            // password is too weak.
            console.log("Error Occur while updating");
            console.log(error)
            
        });
    }
    
    ngOnInit() {
        
      this.queryparams = this.route.snapshot.queryParams;
    //   console.log(this.queryparams);

        // this.logUser = localStorage.getItem('currentUser');
     }
     ngAfterViewInit(){
         
        this.auth.verifyPasswordResetCode(this.queryparams.oobCode).then((email)=> {
            this.accountEmail = email;
            // console.log(email);
        }).catch((error)=>{
            this.accountEmail =error.message;
            console.log(error)
        });

     }

}