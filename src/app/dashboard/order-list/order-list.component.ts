import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AppService } from '../../services/app.service';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders=[];
  sinOrder={};
  constructor(private cartService:CartService, private router:Router) { }

  seeItems(id){
    // this.sinOrder = order;
    this.router.navigate(["/dashboard/items/"+id])
  }

  ngOnInit() {
    this.cartService.getOrder().subscribe((orders)=>{
      this.orders = orders
    })

    
  }

}
