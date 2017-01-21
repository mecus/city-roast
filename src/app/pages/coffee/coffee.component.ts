import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {
  products = [];
  constructor(private producService:ProductService) { }

  ngOnInit() {
    this.producService.getProduct()
      .subscribe((products)=>{
        this.products = products;
      });
  }

}
