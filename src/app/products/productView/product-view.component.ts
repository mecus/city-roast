import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CheckOutService } from '../../services/check-out.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Product } from '../../models/product.model';
import { AuthService } from '../../authentications/auth-service';
import { DbService } from '../../services/db.service';
import { CartService } from '../../services/cart.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'product-view',
    templateUrl: 'product-view.component.html',
    styleUrls: ['product.component.scss', './product-media-query/product-view.media.scss']
})
export class ProductViewComponent implements OnInit {
    islogin:boolean = false;
    active;
    positiveNum:boolean = false;
    product;
    products=[];
    simVee:boolean = false;
    similaProd;
    dproduct = {
        id: 9
        // name: 'Italian Coffee Beans',
        // price: '45',
        // code: '23098',
        // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/city-roast.appspot.com/o/images%2Fdark-decaffeinated-colombian_large.jpg?alt=media&token=d9a20d69-6eed-43b2-bbab-fb3497e49089',
        // description: ' once() method to simplify this scenario: it triggers once and then does not trigger again.'
    };
    constructor(private productService:ProductService, private route:ActivatedRoute, private cartService:CartService,
    private router:Router, private _location: Location, private checkOutService:CheckOutService, private authService:AuthService,
    private title:Title) { 
       
    }

    back(){
        this._location.back();
    }
    viewOthers(product){
        let id = product.id;
        this.router.navigate(['products/'+id]);
        
    }

    addtoCart(qty, blend?){
        // console.log(this.dproduct);
        if(qty < 1){
            this.positiveNum = true;
            return;
        }else{
            let cart = {
                name: this.dproduct['name'],
                price: this.dproduct['price'],
                oldprice: this.dproduct['oldprice'],
                imageUrl: this.dproduct['imageUrl'],
                size: this.dproduct['size'],
                qty: qty,
                pid: this.dproduct['id']
            }
            this.cartService.createCart(cart);
        }


        // console.log(qty, blend);
        // if(!localStorage.getItem('idToken')){
        //     this.authService.logAnonymous()
        //         .then(res=>{
        //             this.authService.authChange();
        //         })
        //         .catch(err=>console.log(err));
        //     // this.islogin = true;

        //     setTimeout(()=>{
        //         if(localStorage.getItem('currentUser')){
        //             if(qty < 1){
        //                 this.positiveNum = true;
        //             }else{
        //                 this.cartService.incrementQty(this.dproduct, qty, blend);
        //                 // this.cartService.addCart(this.dproduct);
        //                 // this.router.navigate(['/cart']);
        //                 // this.router.navigate(["products/?", {category: "coffees"}]);
        //                 this._location.back();
        //             }
        //         }

        //     }, 500);
            
        // }else
        //     if(localStorage.getItem('currentUser')){
        //         if(qty < 1){
        //             this.positiveNum = true;
        //         }else{
        //             this.cartService.incrementQty(this.dproduct, qty, blend);
        //             // this.cartService.addCart(this.dproduct);
        //             this.router.navigate(['/cart']);
        //             //this.router.navigate(["products/?", {category: "coffees"}]);
        //             // this._location.back();
        //         }
        //     }
        
        
        
    }
    simpView(simp){
        this.router.navigate(['/product/?', {id:+simp.id, product_name: simp.name}]);
        this.simVee = true;
        this.active = simp.id;
        
    }
    ngOnInit() {
        this.cartService.createDb();
        this.cartService.createDb();
        this.authService.authUserState();
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
                    this.title.setTitle(this.dproduct['name']);
                    // console.log(this.dproduct);
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