import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './authentications/auth-service';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent implements OnInit {
  title = 'London City Roast';

    constructor(private authService:AuthService, private af:AngularFire){}


  logAnonymous(){
     if(!localStorage.getItem('idToken')){
      this.authService.logAnonymous()
        .then(success=>{
          this.authService.authChange();
        })
        .catch(error=>console.log(error));
    } 
  }

  ngOnInit(){
    this.af.auth.subscribe(user=>{
      if(user==null){
        this.logAnonymous();
      }
 
    });


    // this.authService.logOut();
    // localStorage.clear();
    // console.log(localStorage);
  }
}
