import { Component, OnInit, HostListener } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'order',
    templateUrl: './order.component.html',
    styleUrls: ['./check-out.module.scss', './check-out-form.scss']
})
export class OrderComponent implements OnInit {
    orders=[];
    customerInfo=[];
    sumCart;
    deliveryFee:number = 0.00;
    newD;
    @HostListener('change', ['$event']) onChange($event) {
            this.newD = $event;
        
        console.log(this.newD);
    }
    constructor(private cartService:CartService) { 
    
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
        this.cartService.getCustomerDetails()
            .subscribe(customer=>{
                this.customerInfo = customer;
                console.log(customer);
            });

        this.cartService.getCart()
            .subscribe(carts=>{
                this.orders = carts
                this.sumCartPrice(carts);
            });
    }

}