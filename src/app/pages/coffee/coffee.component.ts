import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { animate, state, trigger, transition, style } from '@angular/animations';


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
  products = [];
  togInfo:boolean = true;
  togtxt = 'show';
  constructor(private producService:ProductService, 
  private cartService:CartService,
  private router:Router
  ) { }


  viewProduct($id){
    this.router.navigate(['/products', +$id]);
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
        this.products = products;
      });
  }

}
