import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { CheckOutService } from '../../services/check-out.service';
import { Observable } from 'rxjs/Observable';
// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { AuthService } from '../../authentications/auth-service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  page: Number = 1;
  pageSize = 10;
  customers;
  allCustomers;
  onlineCustomer;
  currentTime = Date.now();

  constructor(private cartService:CheckOutService, private authService: AuthService) { }
  remoteCustomer(key){
    let D = confirm("Are you sure you want to permanently delete this customer?");
    if(D==true){
      // this.cartService.deleteCustomerDetails(key);
      this.authService.deleteAccount(key);
    }
    
  }
  getOnlineUser(){
    this.customers = this.onlineCustomer;
  }
  togg = true;
  getAll(){
      this.customers = this.allCustomers;
      this.togg = false
  }
  getFew(){
    this.getAccounts();
    this.togg = true;
  }
  ngOnInit() {
    // this.cartService.getAllCustomerDetails().subscribe((customer)=>{
    //   // this.customers = customer;
    // });
    this.getAccounts();
   
  }
  getAccounts(){
    this.authService.getAccounts()
    .map(snapshot=>{
      let dataAcc = [];
      snapshot.forEach(doc=>{
        let data = doc.payload.val();
        let key = doc.key;
        dataAcc.push({...data, key});
      })
      return dataAcc;
      
    }).subscribe(account=>{
      this.customers = _.filter(account, {"active": true});
      this.onlineCustomer = _.filter(account, {"status": "on"});
      this.allCustomers = account;
    })
  }
}
