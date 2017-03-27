import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ord-success',
    templateUrl: './html/order-success.component.html',
    styleUrls: ['./styles/order-success.component.scss', './styles/stylesheet.scss']
})
export class OrderSuccessComponent implements OnInit {
    constructor(private cartService:CartService, private router:Router) { }


    deleteCart(){
        this.cartService.clear();
        this.router.navigate(['/']);
        location.reload();
    }
    ngOnInit() { }

}