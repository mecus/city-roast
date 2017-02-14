import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Contact, iContact } from '../../models/contact.model';

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
  constructor(private fb:FormBuilder, private appService:AppService) {
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
      }).catch(err=>{
        this.errMsg =err;
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
