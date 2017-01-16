import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentications/auth-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss']
})
export class MenuComponent implements OnInit {
    isRedlogo:boolean = true;
    currentuser;
    constructor(private auth:AuthService) { }


    signOut(){
        this.auth.logOut();
    }

    ngOnInit() { 
        this.currentuser = localStorage.getItem('currentUser');
        this.auth.authChange();
    }

}