import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts:Observable<any[]>;
  singlecontact={};
  showMsg:boolean = false;
  constructor(private appService:AppService) { }
  
  seeContact(contact){
    this.singlecontact = contact;
    this.showMsg = true;

  }
  closeMsg(){
    this.showMsg = false;
  }

  ngOnInit() {
    this.contacts = this.appService.getContacts();
  }

}
