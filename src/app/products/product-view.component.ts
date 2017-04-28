import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Product } from '../models/product.model';
import { AuthService } from '../authentications/auth-service';

@Component({
    selector: 'product-view',
    templateUrl: 'product-view.component.html',
    styleUrls: ['product.component.scss', './product-media-query/product-view.media.scss']
})
export class ProductViewComponent implements OnInit {
    islogin:boolean = false;
    positiveNum:boolean = false;
    product;
    products=[];
    simVee:boolean = false;
    similaProd;
    dproduct = {
        id: 9,
        // name: 'Italian Coffee Beans',
        // price: '45',
        // code: '23098',
        // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fdark-decaffeinated-colombian_large.jpg?alt=media&token=d9a20d69-6eed-43b2-bbab-fb3497e49089',
        // description: ' once() method to simplify this scenario: it triggers once and then does not trigger again.'
    };
    constructor(private productService:ProductService, private route:ActivatedRoute, 
    private router:Router, private _location: Location, private cartService:CartService, private authService:AuthService) { }

    back(){
        this._location.back();
    }
    viewOthers(product){
        let id = product.id;
        this.router.navigate(['products/'+id]);
        
    }

    addtoCart(qty, blend){
        // console.log(qty, blend);
        if(!localStorage.getItem('idToken')){
            this.authService.logAnonymous()
                .then(res=>{
                    this.authService.authChange();
                })
                .catch(err=>console.log(err));
            // this.islogin = true;

            setTimeout(()=>{
                if(localStorage.getItem('currentUser')){
                    if(qty < 1){
                        this.positiveNum = true;
                    }else{
                        this.cartService.incrementQty(this.dproduct, qty, blend);
                        // this.cartService.addCart(this.dproduct);
                        this.router.navigate(['/cart']);
                    }
                }

            }, 500);
            
        }else
            if(localStorage.getItem('currentUser')){
                if(qty < 1){
                    this.positiveNum = true;
                }else{
                    this.cartService.incrementQty(this.dproduct, qty, blend);
                    // this.cartService.addCart(this.dproduct);
                    this.router.navigate(['/cart']);
                }
            }
        
        
        
    }
    simpView(simp){
        this.router.navigate(["products/"+simp.id]);
        this.simVee = true;
        
    }
    ngOnInit() { 
         this.productService.getProduct()
            .subscribe((products)=>{
                if(products.length > 0){
                    products.length = 4;
                    this.products = products.reverse();
                }
                
                
            });
            // let id = +this.route.snapshot.params['id'];
            // this.productService.getProduct().subscribe(products=>{
            //     this.dproduct = products.find((product)=> product.id == id);
            //     if(this.dproduct){
            //         let simProd = products.find((product)=> product.id == id);
            //         this.similaProd = products.filter((product)=>{
            //             return product.name === simProd.name;
            //         })
            //     }
            // });
            this.route.params.forEach((param)=>{
                // console.log(+param["id"]);
                this.productService.getProduct().subscribe((products)=>{
                    this.dproduct = products.find((product)=> product.id == +param['id']);
                    if(this.dproduct){
                        let simProd = products.find((product)=> product.id == +param['id']);
                        this.similaProd = products.filter((product)=>{
                            return product.name === simProd.name;
                        })
                    }
                }, (error)=>{console.log(error)}, ()=>{console.log("Observer completed all!")} );
            })
            
            
    }

}