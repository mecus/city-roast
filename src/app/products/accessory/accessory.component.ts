import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CheckOutService } from '../../services/check-out.service';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { animate, state, trigger, transition, style } from '@angular/animations';
import * as _ from 'lodash';

@Component({
  selector: 'app-accessory',
  templateUrl: './accessory.component.html',
  styleUrls: ['./accessory.component.scss']
})
export class AccessoryComponent implements OnInit {

  accessory$ = [];
  togInfo:boolean = true;
  togtxt = 'show';
  constructor(private producService:ProductService, 
    private cartService:CheckOutService,
    private router:Router, private title:Title
  ){ 
    title.setTitle('Accessories');
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
        this.accessory$ = _.filter(products, {'tag': 'accessories'});
      });
  }

}