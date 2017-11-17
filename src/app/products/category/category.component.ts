import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Observable } from "rxjs/Observable";
import { Product } from "../../models/product.model";

import { CheckOutService } from "../../services/check-out.service";
import { AuthService } from "../../authentications/auth-service";

@Component({
  selector: 'product-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  products$;

  dproduct;
  constructor(private router:Router, private route:ActivatedRoute, 
  private productService:ProductService,
  private cartService:CheckOutService, private authService:AuthService ) { }

   viewProduct($id){
    this.router.navigate(['/product/?', {id: $id.id, product_name: $id.name}]);
  }
  ngOnInit() {
    this.route.params.forEach((params=>{
      this.productService.getProduct().subscribe((products)=>{
       this.products$ = products.filter((prodCat)=> prodCat.category.name === params['category']);
      })
    }))
  }

  addtoCart(blend){
        // console.log(qty, blend);
        if(!localStorage.getItem('idToken')){
            this.authService.logAnonymous()
                .then(res=>{
                    this.authService.authChange();
                })
                .catch(err=>console.log(err));
            // this.islogin = true;

            setTimeout(()=>{
               
                    // this.cartService.incrementQty(this.dproduct, 1, blend);
                    // this.cartService.addCart(this.dproduct);
                    this.router.navigate(['/cart']);

            }, 500);
            
        }else
            if(localStorage.getItem('currentUser')){
                
                    // this.cartService.incrementQty(this.dproduct, 1, blend);
                    // this.cartService.addCart(this.dproduct);
                    this.router.navigate(['/cart']);
               
            } 
        
    }

}
