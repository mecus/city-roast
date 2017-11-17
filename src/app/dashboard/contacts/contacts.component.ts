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
  page: Number = 1;
  pageSize = 5;
  contacts = [];
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
  removeContact(key){
    let D = confirm("Are you sure?");
    if(D==true){
      this.appService.deleteContact(key);
    }
    
  }

  ngOnInit() {
    this.appService.getContacts().subscribe((contact)=>{
      this.contacts = contact;
    })
  }

}
