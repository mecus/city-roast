import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';

import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { CheckOutService } from '../services/check-out.service';

interface iUser{
    email:string,
    isAdmin: boolean;
}
@Injectable()

export class AuthService {
    public isAuthenticated: boolean = false;
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
            this.getAdminUser();
        }
    getAdminUser(){
        let uid = localStorage.getItem("userId");
        if(uid){
            this.db.object('accounts/'+uid).valueChanges()
            .subscribe((user :iUser)=>{
                if(user){
                    this.isAuthenticated = user.isAdmin;
                }
            });
        }
        return this.isAuthenticated;
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
         dbRef.set({isAdmin: false, active: false, status: 'on', lastLogin: Date.now(), email: email, createdAt: Date()})
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
        if(update.uid){
            let dbRef = this.db.object('accounts/'+update.uid);
            return dbRef.update({...update, status: update.status}); 

        }
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
        // let dbRef = this.db.object('accounts/'+localStorage.getItem('idToken'));
        // dbRef.update({status: 'off'});
        return this.afA.auth.signOut();
    }

    authChange(){
        this.afA.authState.subscribe((newUser)=>{
            if(!localStorage.getItem('currentUser') && newUser ){
                this.storeAuthState(newUser);
                console.log('user saved in the storage');
                this.getAdminUser();
            }
            if(newUser){
                console.log(newUser.getToken());
                console.log('User Currently LoggedIn');
                this.getAdminUser();
                console.log(newUser);
            }else{
                console.log('No User LoggedIn');
                this.getAdminUser();
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
    signInWithFacebook(){
        let provider = new firebase.auth.FacebookAuthProvider();
        provider.setCustomParameters({
            'display': 'popup'
        });
        firebase.auth().signInWithPopup(provider).then((result)=> {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            localStorage.setItem('currentUser', (user.email));
            localStorage.setItem('idToken', (user.uid));
            localStorage.setItem('userId', (user.uid));
            localStorage.setItem('displayName', user.displayName);
            // console.log(user);
            // console.log(token);
            let db = firebase.database().ref('accounts/'+user.uid);
            db.once('value').then((account)=>{
                let acc = account.val();
                let dbRef = this.db.object('accounts/'+user.uid);
                if(!acc){
                    // this.createAccount(user.uid, user.email);     
                    dbRef.set({isAdmin: false, active: false, status: 'on', lastLogin: Date.now(), email: user.email, createdAt: Date()})
                           .then(success=>{console.log("User Account Created successfully "+success)})
                           .catch(error=>{console.log("something went wrong "+error)});
                           return;
                }else{
                    dbRef.update({status: 'on', lastLogin: Date.now()}).then(res=>console.log(res)).catch(err=>console.log(err));
                    console.log("Account Already Exist: ", account['email']);
                }
            })
            setTimeout(() => {
                this._router.navigate(["/"]);
            }, 500);
            // ...
        }).catch((error)=> {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
        });
    }
    signInWithGoogle(){
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        firebase.auth().signInWithPopup(provider).then((result)=> {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            localStorage.setItem('currentUser', (user.email));
            localStorage.setItem('idToken', (user.uid));
            localStorage.setItem('userId', (user.uid));
            localStorage.setItem('displayName', user.displayName);
            // ...
            let db = firebase.database().ref('accounts/'+user.uid);
            db.once('value').then((account)=>{
                let acc = account.val();
                let dbRef = this.db.object('accounts/'+user.uid);
                if(!acc){
                    // this.createAccount(user.uid, user.email);     
                    dbRef.set({isAdmin: false, active: false, status: 'on', lastLogin: Date.now(), email: user.email, createdAt: Date()})
                           .then(success=>{console.log("User Account Created successfully "+success)})
                           .catch(error=>{console.log("something went wrong "+error)});
                           return;
                }else{
                    dbRef.update({status: 'on', lastLogin: Date.now()}).then(res=>console.log(res)).catch(err=>console.log(err));
                    console.log("Account Already Exist: ", account['email']);
                }
            })
            setTimeout(() => {
                this._router.navigate(["/"]);
            }, 500);
          }).catch((error)=> {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

    }
}