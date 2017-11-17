import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';

import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { CheckOutService } from '../services/check-out.service';

@Injectable()

export class AuthService {
    isAuthenticated: boolean = false;
    redirectUrl: string;
    errMsg;
    cLength;
    currentUser;
  

    constructor(private afA:AngularFireAuth, 
        private _router:Router, private db:AngularFireDatabase,
        private cartService:CheckOutService) { 
            afA.authState.subscribe(
                user => this.currentUser = user
            )
        }

    public storeAuthState(authState) {
        if(authState){
            // this.isAuthenticated = true;
            if(authState){
            localStorage.setItem('currentUser', (authState.email));
            localStorage.setItem('idToken', (authState.uid));
            localStorage.setItem('userId', (authState.uid));
            // localStorage.setItem('anonymous',(authState.auth.isAnonymous))
            }
        }
        return authState;
    }

    signUp(user:User){
        if(user){
            console.log("creating user account");
           return this.afA.auth.createUserWithEmailAndPassword(
                user.email,
                user.password
            )
        }
    }
    createAccount(uId, email){
         let dbRef = this.db.object('accounts/'+this.currentUser["uid"]);
         dbRef.set({isAdmin: false, active: false, email: email, createdAt: Date()})
                .then(success=>{console.log("User Account Created successfully "+success)})
                .catch(error=>{console.log("something went wrong "+error)});
    }
    getAccount(uId?){
        // console.log(this.currentUser["uid"]);
        let uid = localStorage.getItem("userId");
        if(uid){
            return this.db.object('accounts/'+uid).valueChanges();
        }
        return undefined;
    }
    getAccountWithId(){
       return this.db.object('accounts/'+this.currentUser["uid"]).snapshotChanges(); 
    }
    getAccounts(){
        return this.db.list('accounts').snapshotChanges();
    }
    
    updateAccount(update){
        // console.log(this.currentUser["uid"]);
        let dbRef = this.db.object('accounts/'+this.currentUser["uid"]);
        return dbRef.update({...update, updatedAt: Date(), active: true});

    }
    deleteAccount(key){
        let dbRef = this.db.object('accounts/'+key);
        dbRef.remove().then(res=>{
            console.log("Account Deleted");
        }).catch(err=>console.log(err));
    }
    logIn(user:User){
        if(user){
            return this.afA.auth.signInWithEmailAndPassword(
                user.email,
                user.password
            )
        }
    }

    logOut(){
        return this.afA.auth.signOut();
    }

    authChange(){
        this.afA.authState.subscribe((newUser)=>{
            if(!localStorage.getItem('currentUser') && newUser ){
                this.storeAuthState(newUser);
                console.log('user saved in the storage');
            }
            if(newUser){
                console.log(newUser.getToken());
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
   authUserState(){
       //checking for current user LoggedIn==//
      return this.afA.authState;
   }

   //Password Resetting Function
   resetPasswordLink(email){
       var auth = firebase.auth();
        var emailAddress = email;

        auth.sendPasswordResetEmail(emailAddress).then(()=> {
            console.log('password reset');
        }, function(error) {
            console.log(error);
        });
   }
   resetPassword(email, password){
        let user = firebase.auth().currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(
            email, password
        )

        // Prompt the user to re-provide their sign-in credentials

        // user.reauthenticate(credential).then(()=> {
        //     // User re-authenticated.
        //     console.log("Password Reset successfully")
        // }, (error)=> {
        //     // An error happened.
        //     console.log("Something went wrong");
        // });
   }
}