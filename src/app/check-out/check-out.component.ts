import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs/Observable';

import { Customer, iCustomer } from '../models/customer-details.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
    selector: 'check-out',
    templateUrl: './check-out.component.html',
    styleUrls: ['./check-out.module.scss', './check-out-form.scss']
})
export class CheckOutComponent implements OnInit {
    carts;
    sumCart;
    cusForm;
    customerInput = new Customer;
    hideForm:boolean = false;
    customers=[];
   
    constructor(private appService:AppService, private cartService:CartService, 
    private _elementRef:ElementRef, private _fb:FormBuilder, private _router:Router) { 
        this.cusForm = _fb.group(this.customerInput);

        if(localStorage.getItem('currentUser')){
            if(localStorage.getItem("currentUser").includes('@')){
                this.cusForm.patchValue({

                email: localStorage.getItem("currentUser")
            });
            }else{
                this.cusForm.patchValue({

                email: "enter your email"
            });
            }
        }
        
    }

    hideMyform(){
        this.hideForm = true;
    }
  
    saveCustomer(details){
        let currentCustomer;
        this.cartService.getCustomerDetails().subscribe((customer)=>{
            currentCustomer = customer;
        })
        console.log(currentCustomer);
        if(currentCustomer.id){
            this._router.navigate(['/order']);
            return
        }
        let lastId = this.customers.reverse();
        if(lastId.length > 0){
            let id = parseInt(lastId[0].id)
            
            this.cartService.saveCustomerDetails(details, id+1);
        }else{
            this.cartService.saveCustomerDetails(details, 1); 
        }
           
        // console.log(this.lastId);
        this._router.navigate(['/order']);
    }
     sumCartPrice(cart){
        let priceArr = [];
             cart.forEach(element=>{
            priceArr.push(element.price * element.qty);
        });
        
        this.sumCart = priceArr.reduce(this.sumTotal, 0);
        
    }

    sumTotal(sum, num){
        return sum + num;
    }

    ngOnInit() {
        //Only allowed user if they logged in
        if(!localStorage.getItem('currentUser')){
            this._router.navigate(["/login"]);
            return;
        }

        this.cartService.getAllCustomerDetails().subscribe((customers)=>{
                this.customers = customers;
            });
      
        

         this.cartService.getCart().subscribe((cart)=>{
             this.carts = cart;
             this.sumCartPrice(cart)
            //  console.log(this.carts);
         });
         
         this.cartService.getCustomerDetails()
            .subscribe((customer)=>{
                // console.log(customer.firstName);

                this.cusForm.patchValue({
                    firstName:  customer.firstName,
                    lastName:  customer.lastName,
                    // email:  "",
                    telephone:  customer.telephone,
                    addressOne:  customer.addressOne,
                    addressTwo:  customer.addressTwo,
                    postCode:  customer.postCode,
                    city:  customer.city,
                    country:  "United Kingdom"
                })
            });
    }

}