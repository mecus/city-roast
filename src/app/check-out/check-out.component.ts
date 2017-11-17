import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { CheckOutService } from '../services/check-out.service';
import { Observable } from 'rxjs/Observable';
import { Customer, iCustomer } from '../models/customer-details.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../authentications/auth-service';
import { CartService } from '../services/cart.service';
declare var $:any;


@Component({
    selector: 'check-out',
    templateUrl: './check-out.component.html',
    styleUrls: ['./check-out.module.scss', './check-out-form.scss']
})
export class CheckOutComponent implements OnInit {
    spinner:boolean = true;
    carts;
    sumCart;
    cusForm;
    userAccount;
    updateFlag: any;
    customerInput = new Customer;
    hideForm:boolean = false;
    customers=[];
    lastCus;
    showErr: boolean = false;
    emptyErr: boolean = false;
    hideSearch: boolean = false;
    foundyou:string = "";
   invalidForm;
    constructor(private appService:AppService, private checkoutService:CheckOutService, 
    private _elementRef:ElementRef, private _fb:FormBuilder, private _router:Router,
    private authService: AuthService, private cartService:CartService) { 
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
        if(this.cusForm.status == 'INVALID'){
            console.log(this.cusForm.status);
            this.invalidForm = true;
        }else{
            this.invalidForm = false;
            // console.log("this.cusForm.status");
            this.authService.updateAccount(details)
            .then((res)=>{
                console.log("User Updated", res);
                this._router.navigate(['/order']);
            }).catch(err=>{
                console.log(err);
            });
        }

        // this.checkoutService.saveCustomerDetails(details);
        // let currentCustomer;
        // this.cartService.getCustomerDetails().subscribe((customer)=>{
        //     currentCustomer = customer;
        // })
        // console.log(currentCustomer);
        // if(currentCustomer.id){
        //     this._router.navigate(['/order']);
        //     return
        // }
        
        // let lastId = this.customers.reverse();
        // if(lastId.length > 0){
        //     let id = parseInt(lastId[0].id)
            
        //     this.cartService.saveCustomerDetails(details, id += 1);
        // }else{
        //     this.cartService.saveCustomerDetails(details, 1); 
        // }
        
        // console.log(this.lastId);
        // this._router.navigate(['/order']);
        
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
    
    // public findCustomer(email, telephone, postcode){
    //     if(!email){
    //         this.emptyErr = true;
    //         setTimeout(()=>{
    //             this.emptyErr = false;
    //         },8000);

    //         return;
    //     }
        
    //     this.lastCus = this.customers.find((customer)=>{
    //         return customer.email == email.toString();
    //     })

    //     // console.log(this.lastCus);
    //     if((this.lastCus.email === email.toString().toLowerCase()) && (this.lastCus.telephone === telephone.toString()) && (this.lastCus.postCode === postcode.toString().toUpperCase()) ){
    //         this.cusForm.patchValue({
    //             firstName:  this.lastCus.firstName,
    //             lastName:  this.lastCus.lastName,
    //             email:  this.lastCus.email,
    //             gender: this.lastCus.gender,
    //             telephone:  this.lastCus.telephone,
    //             addressOne:  this.lastCus.addressOne,
    //             addressTwo:  this.lastCus.addressTwo,
    //             postCode:  this.lastCus.postCode,
    //             city:  this.lastCus.city,
    //             country:  "United Kingdom"
    //         })
    //         this.hideSearch = false;
    //         this.foundyou = this.lastCus.firstName;
    //     }else{
    //         this.showErr = true; 
    //     }
        
    //     // let input = document.getElementById('search-box');
    //     // input.value = "";
            
    // }
    public removeSearch(){
        this.hideSearch = false;
    }
    public removeFound(){
        this.foundyou = "";
    }
    ngOnInit() {
        // this.cartService.createDb();
        //Only allowed user if they logged in
        if(!localStorage.getItem('idToken')){
            this._router.navigate(["/login"]);
            return;
        }

        // this.checkoutService.getAllCustomerDetails().subscribe((customers)=>{
        //         this.customers = customers;
        //         // console.log(customers);
        // });
        
       setTimeout(()=>{
            this.authService.getAccount()
            .subscribe((account)=>{
                this.spinner = false;
                // this.userAccount = account;
                // console.log(this.userAccount);
                if(account && account["firstName"] && account["lastName"] && account["postCode"]){
                    // this._router.navigate(["/order"]);
                }
                if(account && account["firstName"] && account["lastName"]){
                    this.cusForm.patchValue({
                        firstName:  account["firstName"],
                        lastName:  account["lastName"],
                        email:  account["email"],
                        gender: account["gender"],
                        telephone:  account["telephone"],
                        addressOne:  account["addressOne"],
                        addressTwo:  account["addressTwo"],
                        postCode:  account["postCode"],
                        city:  account["city"],
                        country:  "United Kingdom"
                    })
                    this.updateFlag = "Please check your details below and make changes if necessory";
                }
            });

            // this.cartService.retrieveCart().subscribe((carts)=>{
            //     this.carts = carts[0];
            //     console.log(carts[0]);
            // });
       }, 300);
    
    }

}