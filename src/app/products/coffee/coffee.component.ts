import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CheckOutService } from '../../services/check-out.service';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { animate, state, trigger, transition, style } from '@angular/animations';
import * as _ from 'lodash';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss', './coffee-media-query.scss'],

  animations: [
    trigger('coffeState', [
      state('show', style({
        display: 'block',
        transform: 'translateY(0%)',
        zIndex: 1
      })),
      state('hide', style({
        display: 'none',
        zIndex: -1,
        transform: 'translateY(100%)'
       
      })),
      transition('show => hide', animate('500ms ease-in')),
      transition('hide => show', animate('500ms ease-out'))
    ])
  
  ]


})
export class CoffeeComponent implements OnInit {
  coffees$ = [];
  togInfo:boolean = true;
  togtxt = 'show';
  constructor(private producService:ProductService, 
  private cartService:CheckOutService,
  private router:Router, private title:Title
  ) { 
    title.setTitle('Coffees');
  }


  viewProduct($id){
    this.router.navigate(['/product/?', {id: $id.id, product_name: $id.name}]);
  }
  toggleInfo(){
    this.togInfo = this.togInfo? false : true;
    if(this.togInfo == true){
      this.togtxt = 'show';
    }else{
      this.togtxt = 'hide';
    }
    
  }
  ngOnInit() {
    this.producService.getProduct()
      .subscribe((products)=>{
        this.coffees$ = _.filter(products, {'tag': 'coffees'});
        // console.log(this.coffees$);
      });
  }

}
