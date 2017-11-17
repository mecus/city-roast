import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CheckOutService } from '../../services/check-out.service';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { animate, state, trigger, transition, style } from '@angular/animations';
import * as _ from 'lodash';


@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {
  machines$ = [];
  togInfo:boolean = true;
  togtxt = 'show';
  constructor(private producService:ProductService, 
    private cartService:CheckOutService,
    private router:Router, private title:Title
  ){ 
    title.setTitle('Coffee Machines');
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
        this.machines$ = _.filter(products, {'tag': 'machines'});
      });
  }

}