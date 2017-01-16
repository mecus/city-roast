import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Product } from '../models/product.model';

@Component({
    selector: 'product-view',
    templateUrl: 'product-view.component.html',
    styleUrls: ['product.component.scss']
})
export class ProductViewComponent implements OnInit {
    product;
    products;
    dproduct = {
        name: 'Italian Coffee Beans',
        price: '45',
        code: '23098',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fdark-decaffeinated-colombian_large.jpg?alt=media&token=d9a20d69-6eed-43b2-bbab-fb3497e49089',
        description: ' once() method to simplify this scenario: it triggers once and then does not trigger again.'
    };
    constructor(private productService:ProductService, private route:ActivatedRoute, private router:Router, private _location: Location) { }

    back(){
        this._location.back();
    }
    viewOthers(product){
        let id = product.id;
        this.router.navigate(['products/'+id]);
        
    }

    getProductById(){
        let id:Params;
        this.route.params.subscribe((param:Params)=>{
            id = param;
        });
        let filproduct;
        this.productService.getProduct()
            .subscribe((products)=>{
                filproduct = products;
                // console.log(products);
            });
            filproduct.filter((product)=>{
                    if(product.id == id['id']){
                        this.dproduct = product;
                    }
                })[0]

            // console.log(this.dproduct);
    }
    ngOnInit() { 
        this.getProductById();

         this.productService.getProduct()
            .subscribe((products)=>{
                if(products.length > 2){
                    products.length = 5;
                    this.products = products.reverse();
                }
                
                
            });
            // this.route.params
            // .switchMap((params:Params)=>this.productService.oneProduct(+params['id']))
            // .subscribe((product:Product)=>{
            //     this.product = product;
            //     console.log(product);
            // });
            // console.log('testing from new');
            // console.log(this.product);
            // let prod = this.productService.oneProduct(7);
            // console.log(prod);
            
            
            
    }

}