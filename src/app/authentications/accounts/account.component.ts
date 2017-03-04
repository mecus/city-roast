import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Customer } from '../../models/customer-details.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.component.scss']
})
export class AccountComponent implements OnInit {
    title = 'Account Rocks';
    customerInfo=[];
    cusForm:FormGroup;
    customer = new Customer;
    constructor(private cartService:CartService, private _fb:FormBuilder) {
        this.cusForm = _fb.group(this.customer);

        
     }
     
    ngOnInit() { 
        this.cartService.getCustomerDetails()
            .subscribe(customers=>{
                this.customerInfo =  customers;
                console.log(this.customerInfo[0].firstName);
                this.cusForm.patchValue({
                        firstName: this.customerInfo[0].firstName,
                        lastName: this.customerInfo[0].lastName,
                        email: this.customerInfo[0].email,
                        telephone: this.customerInfo[0].telephone,
                        addressOne: this.customerInfo[0].addressOne,
                        addressTwo: this.customerInfo[0].addressTwo,
                        postCode: this.customerInfo[0].postCode,
                        city: this.customerInfo[0].city,
                        country: "Unite Kingdom"
                    
                });
            });

          
    }

}