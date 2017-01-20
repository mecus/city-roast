import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../authentications/auth-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges {
    isRedlogo:boolean = false;
    currentuser;
    constructor(private auth:AuthService) { }

    changeLogo(){
        setInterval(()=>{
            this.isRedlogo = true;
        }, 10000);
        setInterval(()=>{
            this.isRedlogo = false;
        }, 15000)
    }

    signOut(){
        this.auth.logOut();
    }
    ngOnChanges(){

    }
    ngOnInit() { 
        this.currentuser = localStorage.getItem('currentUser');
        this.auth.authChange();
        this.changeLogo();

    }

}