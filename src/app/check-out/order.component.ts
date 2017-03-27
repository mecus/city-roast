import { Component, OnInit, HostListener } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CustomerOrder } from '../models/order.model';
import { Customer, iCustomer } from '../models/customer-details.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { SHA1 } from '../services/functions';

@Component({
    selector: 'order',
    templateUrl: './order.component.html',
    styleUrls: ['./check-out.module.scss', './check-out-form.scss']
})
export class OrderComponent implements OnInit {
    orders=[];
    customer=[];
    sumCart:number = 0;
    cusOrder;
    deliveryFee:number = 0;
    hidePage:boolean = false;

    //creating update form
    editForm: FormGroup;
    editValue = new Customer;
    isEdit:boolean = false;

    //creating order
    newOrder = new CustomerOrder;
    orderForm:FormGroup;
    //Payment Amount to Barclays
    ordelivery:number = 0;
    shippingMethod:string = "Free Delivery";

    constructor(private cartService:CartService, private _fb:FormBuilder, private _router:Router) {
        this.orderForm = _fb.group(this.newOrder);

        this.editForm = _fb.group(this.editValue);


     }

    @HostListener('change', ['$event']) onChange($event) {
            if($event.target.id == 'free' && $event.target.checked == true){
                this.deliveryFee = 0.00;
                this.shippingMethod = "Free Delivery"
            }
            else if($event.target.id == 'express' && $event.target.checked == true){
                this.deliveryFee = 2.99;
                this.ordelivery = 299;
                this.shippingMethod = "UK Express (1-2 Working Days)";
            }
            else if($event.target.id == 'next-day' && $event.target.checked == true){
                this.deliveryFee = 4.99;
                this.ordelivery = 499;
                this.shippingMethod = "UK Next Working Day (on orders placed before 12:00pm, exclusions apply - see Delivery Policy)";
            }else{
                this.deliveryFee = 0.00
                this.ordelivery = 0;
                this.shippingMethod = "Free Delivery"
            }
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
    modifyOrder(){
        this.hidePage = true;
    }

    saveCustomerUpdate(value){
        this.cartService.updateCustomerDetails(value);
        this.isEdit = false;
    }

    editDetails(){
        this.isEdit = true;
    }
    cancelEdit(){
        this.isEdit = false;
    }

    // newOrder(){
    //     this.cartService.createOrder(this.customerInfo)
    //         .subscribe(order=>{
    //             console.log(order);
    //         });
    // }
    createOrder(){
        // console.log(this.orderForm.value);
        // console.log();
        this.cartService.createOrder(
            this.orderForm.value, 
            this.shippingMethod, this.orders, 
            this.sumCart+this.deliveryFee);
           
         
        // this._router.navigate(["/payment-method"]);
        // location.reload(true);
        
    
    }

    ngOnInit() { 
        this.cartService.getOrder().subscribe((orders)=>{
            // console.log(orders);
            if(!orders[0]){
                this.hidePage = true;
            }
            
        });
     
        this.cartService.getCustomerDetails()
            .subscribe(customers=>{
                this.customer = customers;
            });

        this.cartService.getCart()
            .subscribe(carts=>{
                this.orders = carts
                this.sumCartPrice(carts);
            });


        this.cartService.getCustomerDetails()
            .subscribe(customers=>{
                this.customer = customers;
                // console.log(customers.firstName);
                this.orderForm.patchValue({
                        id: customers.id,
                        orderId: customers.customerId,
                        customerName: customers.firstName + " " + customers.lastName,
                        address:customers.addressOne + ", " +customers.addressTwo, 
                        postcode: customers.postCode,
                        city: customers.city,
                        country: customers.country,
                        email: customers.email,
                        telephone: customers.telephone

                });

                this.editForm.patchValue({
                    firstName: customers.firstName,
                    lastName: customers.lastName,
                    email: customers.email,
                    telephone: customers.telephone,
                    addressOne: customers.addressOne,
                    addressTwo: customers.addressTwo,
                    postCode: customers.postCode,
                    city: customers.city,
                    country: "Unite Kingdom"
                })
            });

            // console.log(this.editForm);
    }

}