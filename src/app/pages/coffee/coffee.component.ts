import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss', './coffee-media-query.scss']
})
export class CoffeeComponent implements OnInit {
  products = [];
  togInfo:boolean = true;
  constructor(private producService:ProductService, 
  private cartService:CartService,
  private router:Router
  ) { }


  viewProduct($id){
    this.router.navigate(['/products', +$id]);
  }
  toggleInfo(){
    this.togInfo = this.togInfo? false : true;
  }
  ngOnInit() {
    this.producService.getProduct()
      .subscribe((products)=>{
        this.products = products;
      });
  }

}
