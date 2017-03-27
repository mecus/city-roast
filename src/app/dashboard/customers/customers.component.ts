import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers:Observable<any[]>;

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.customers = this.cartService.getAllCustomerDetails();
        
  }

}
