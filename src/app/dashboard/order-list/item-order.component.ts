import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AppService } from '../../services/app.service';
import { Observable } from 'rxjs/Observable';
// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OrderService } from '../../services/order.service';
import * as _ from 'lodash';

@Component({
    selector: 'items',
    templateUrl: 'item-order.component.html',
     styleUrls: ['order-list.component.scss']

})
export class OrderViewComponent implements OnInit {

    order;
    constructor(private orderService:OrderService, private route:ActivatedRoute){}

    ngOnInit(){
        let key = this.route.snapshot.params['key'];
        this.orderService.getSingleOrderWithItems(key)
        .subscribe((order)=>{
            this.order = order;
           console.log(this.order);
        })

    }
}