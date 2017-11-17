import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Contact, iContact } from '../../models/contact.model';
import { AboutImage } from '../../shared/images/images';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss', './contact-media-query.scss']
})
export class ContactsComponent implements OnInit {
  cForm:  FormGroup;
  sentNotification: boolean = false;
  infoMsg:boolean = true;
  errMsg;
  contactImage=AboutImage;
  constructor(private fb:FormBuilder, private appService:AppService,
    private title:Title) {
      title.setTitle('Contact us');
      let contact = new Contact;
      this.cForm = fb.group(contact);
      // this.cForm.setValidators(Validators.minLength(6));
    
   }
   
   saveContact(contact){
    let db = this.appService.addContact();
      db.push(contact).then(res=>{
        this.sentNotification = true;
        this.infoMsg = false;
        this.clearFormData();
      });
      
   }
   clearFormData(){
       this.cForm.patchValue({
        firstName: "",
        lastName: "",
        email:  "",
        telephone:  "",
        message:  ""
      })
   }
  
  ngOnInit() {
   
  }

}
