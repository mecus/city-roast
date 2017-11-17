import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { ProductService } from '../../services/product.service';
import { AppService } from '../../services/app.service';
import { CheckOutService } from '../../services/check-out.service';
import { iOrder } from '../../models/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  page: Number = 1;
  pageSize = 10;
  spin:boolean = false;
  railsOrder:iOrder[] = [];
  orders;
  queryOrder;

  constructor(private orderService:OrderService, private router:Router) { }

  seeOrder(order){
    // this.sinOrder = order;
    console.log(order);
    this.router.navigate(["/dashboard/order/?", {key: order.key}]);
  }
  removeOrder(id){
    let D = confirm("Are you sure you want to permanently delete this Order?");
    if(D==true){
      // this.cartService.deleteFinalOrder(id)
      // .subscribe((res)=>{
      //   this.refreshOrder();
      //   console.log(res)
      // });
      
      // this.router.navigate(["/dashboard/orders-list"]);
    }else{
      // this.router.navigate(["/dashboard/orders-list"]);
      this.refreshOrder();
    }
    
    
  }
 
  getCompletedOrders(){
    this.orders = _.filter(this.queryOrder, {"status": "completed"});
  }
  getPendingOrders(){
    this.orders = _.filter(this.queryOrder, {"status": "pending"});
  }
  refreshOrder(){
    this.spin = true;
    setTimeout(()=>{this.spin = false;},1000);
    
  }

  ngOnInit() {
    this.getAllOrders();
  }
  getAllOrders(){
    this.orderService.getOrdersWithId()
    .map(snapshot=>{
      let orders = [];
      snapshot.forEach(doc=>{
        let data = doc.payload.val();
        let key = doc.key;
        orders.push({...data, key });
      })
      return orders;
    }).subscribe(orders=>{
      this.orders = _.reverse(orders);
      this.queryOrder = orders;
    });
  }
}
