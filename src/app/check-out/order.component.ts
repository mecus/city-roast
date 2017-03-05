import { Component, OnInit, HostListener } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CustomerOrder } from '../models/order.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'order',
    templateUrl: './order.component.html',
    styleUrls: ['./check-out.module.scss', './check-out-form.scss']
})
export class OrderComponent implements OnInit {
    orders=[];
    customerInfo=[];
    sumCart:number = 0;
    cusOrder;
    deliveryFee:number = 0;
    newD;

    //creating order
    newOrder = new CustomerOrder;
    orderForm:FormGroup;
    //Payment Amount to Barclays
    ordTotal:number = 0;
    ordelivery:number = 0;
    shippingMethod:string = "Free Delivery";
    constructor(private cartService:CartService, private _fb:FormBuilder) {
        this.orderForm = _fb.group(this.newOrder)
     }

    @HostListener('change', ['$event']) onChange($event) {
            // this.newD = $event.target.checked;
            if($event.target.name == 'free' && $event.target.checked == true){
                this.deliveryFee = 0.00;
                this.shippingMethod = "Free Delivery"
            }
            else if($event.target.name == 'express' && $event.target.checked == true){
                this.deliveryFee = 2.99;
                this.ordelivery = 299;
                this.shippingMethod = "UK Express (1-2 Working Days)";
            }
            else if($event.target.name == 'next-day' && $event.target.checked == true){
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
        this.ordTotal = priceArr.reduce(this.converFloat, 0);
    }

    sumTotal(sum, num){
        return sum + num;
    }
    converFloat(sum, num){
        let rund = sum + num;
        return parseInt(rund.toString().replace('.', ''));
    }

    // newOrder(){
    //     this.cartService.createOrder(this.customerInfo)
    //         .subscribe(order=>{
    //             console.log(order);
    //         });
    // }
    checkValue(){
        // console.log(this.orderForm.value);
        // console.log();
        this.cartService.createOrder(this.orderForm.value, this.shippingMethod, this.orders);
    }

    ngOnInit() { 

        this.cartService.getCustomerDetails()
            .subscribe(customers=>{
                this.customerInfo = customers;
            });

        this.cartService.getCart()
            .subscribe(carts=>{
                this.orders = carts
                this.sumCartPrice(carts);
            });
            

        let nform = document.createElement('form');
        let myf = document.getElementById('myform');
        nform.id = "form1";
        nform.name = "form1";
        nform.action = "https://mdepayments.epdq.co.uk/Ncol/Test/orderstandard.asp";
        nform.method = "post";
        nform.appendChild(myf);
        let main = document.getElementById('main-form');
        main.appendChild(nform);



        this.cartService.getCustomerDetails()
            .subscribe(customers=>{
                this.customerInfo =  customers;
                console.log(this.customerInfo[0].firstName);
                this.orderForm.patchValue({
                        orderId: "LCREF123",
                        customerName: this.customerInfo[0].firstName + " " + this.customerInfo[0].lastName,
                        address:this.customerInfo[0].addressOne + " " +this.customerInfo[0].addressTwo + " " +this.customerInfo[0].postCode +" " + this.customerInfo[0].city,
                        email: this.customerInfo[0].email,
                        shipping: this.shippingMethod,
                       
                        
        
                });
            });

            
    }

}