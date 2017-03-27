import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AppService } from '../../services/app.service';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'items',
    template: `
        
        <div class="container" id="content">
            <div class="jumbotron container">
              
                <div class="row">
                    <div *ngFor="let order of orders">
                     
                    <h5> {{order.name}}</h5>
                    <hr>
                    <div class="col col-sm-6">
                        <p>Price: {{order.price | currency: 'GBP': true}}</p>
                        <p>Blend: {{order.type}}</p>
                    </div>
                    <div class="col col-sm-6">
                        <p>Size: {{order.size}}</p>
                        <p>Quantity: {{order.qty}}</p>
                    </div>
                    </div>
                   
                </div>
                <button routerLink="/dashboard/orders-list" class="btn btn-primary">Back</button>
            </div>

        </div>
        
     
     `,
     styles: [`
        #content{
            max-width: 600px;
        }
        .jumbotron{
            color: lightslategray;
            margin: 50px;
        }
     `]

})
export class ItemOrderComponent implements OnInit {

    orders=[];
    constructor(private cartService:CartService, private route:ActivatedRoute){}

    ngOnInit(){
        let id = +this.route.snapshot.params['id'];
        this.cartService.getOrderItems().subscribe((items)=>{
            this.orders = items.filter((item)=>{
               return item.id == id
            })
           
        })

    }
}