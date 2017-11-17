import { Component, OnInit } from '@angular/core';
import { CheckOutService } from '../services/check-out.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'ord-success',
    templateUrl: './html/order-success.component.html',
    styleUrls: ['./styles/order-success.component.scss', './styles/stylesheet.scss']
})
export class OrderSuccessComponent implements OnInit {
    // public orderPal;
    public deleteOrder;
    public itemKeys;
    public orderKeys;

    constructor(private cartService:CartService, private router:Router,
        private meta:Meta, private title:Title) { 
            title.setTitle('Confirmation');
        }

    successUpdate(){
        this.cartService.clearCart();
        setTimeout(()=>{
            this.router.navigate(["/"]);
        }, 2000);
    }


    ngOnInit() {

     }

}