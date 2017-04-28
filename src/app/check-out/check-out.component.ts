import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
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
    lastCus;
    showErr: boolean = false;
    emptyErr: boolean = false;
    hideSearch: boolean = true;
    foundyou:string = "";
   
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

                email: ""
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
            
            this.cartService.saveCustomerDetails(details, id += 1);
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
    
    public findCustomer(email, telephone, postcode){
        if(!email){
            this.emptyErr = true;
            setTimeout(()=>{
                this.emptyErr = false;
            },8000);

            return;
        }
        
        this.lastCus = this.customers.find((customer)=>{
            return customer.email == email.toString();
        })

        // console.log(this.lastCus);
        if((this.lastCus.email === email.toString().toLowerCase()) && (this.lastCus.telephone === telephone.toString()) && (this.lastCus.postCode === postcode.toString().toUpperCase()) ){
            this.cusForm.patchValue({
                firstName:  this.lastCus.firstName,
                lastName:  this.lastCus.lastName,
                email:  this.lastCus.email,
                gender: this.lastCus.gender,
                telephone:  this.lastCus.telephone,
                addressOne:  this.lastCus.addressOne,
                addressTwo:  this.lastCus.addressTwo,
                postCode:  this.lastCus.postCode,
                city:  this.lastCus.city,
                country:  "United Kingdom"
            })
            this.hideSearch = false;
            this.foundyou = this.lastCus.firstName;
        }else{
            this.showErr = true; 
        }
        
        // let input = document.getElementById('search-box');
        // input.value = "";
            
    }
    public removeSearch(){
        this.hideSearch = false;
    }
    public removeFound(){
        this.foundyou = "";
    }
    ngOnInit() {
        //Only allowed user if they logged in
        if(!localStorage.getItem('currentUser')){
            this._router.navigate(["/login"]);
            return;
        }

        this.cartService.getAllCustomerDetails().subscribe((customers)=>{
                this.customers = customers;
                // console.log(customers);
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
                    email:  customer.email,
                    gender: customer.gender,
                    telephone:  customer.telephone,
                    addressOne:  customer.addressOne,
                    addressTwo:  customer.addressTwo,
                    postCode:  customer.postCode,
                    city:  customer.city,
                    country:  "United Kingdom"
                })
                if(customer.email){this.hideSearch = false;}
                
            });
    }

}