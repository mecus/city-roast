import { Component, OnInit, Output, EventEmitter,
  animate, state, trigger, transition, style } from '@angular/core';
import { Images, WelcomeImage } from '../../shared/images/images';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.media-query.scss'],
  animations: [
    trigger('zoom', [
      state('large', style({
        color: 'red',
        transform: 'scale(1.1)'
      })),
      state('small', style({
        color: '#fff',
        transform: 'scale(1)'
      }))
    ])
  ]
})
export class HomeComponent implements OnInit {
  image = WelcomeImage;
  products = [];
  displayImg = WelcomeImage[2];
  isHide:boolean = true;
  itemAdd:boolean = false;
  isLogin:boolean =false;
  isSlider:boolean = false;

  constructor(private productService:ProductService, private router:Router, private cartService:CartService) { }

  seeSlidepic(){
    this.isSlider = true;
  }
  closeSlidepix(){
    this.isSlider = false;
  }

  viewProduct(data):void{
    let param = data.id;
    this.router.navigate(['products/'+param]);

  }
  selectImg(image){
    this.displayImg =image;
    this.isHide = false;
  }
  closeImage(){
    this.isHide = true;
  }
  addToCart(item){
   if(localStorage.getItem('currentUser')){
      this.itemAdd = true;
      setTimeout(()=>{this.itemAdd = false;}, 6000);
    
      this.cartService.incrementQty(item, 1);
   }else{

     this.isLogin = true;
     setTimeout(()=>{this.isLogin = false;}, 6000)
   }
    
    
  }

  ngOnInit() {
    this.productService.getProduct()
        .subscribe(products=>{
          let reverse = products.reverse();
    
          if (reverse.length > 1){
            reverse.length = 5
            this.products = reverse;
          }else{
            if(reverse.length >= 3){
              reverse.length = 3
              this.products = reverse
            }
          }
        });
      
  }

}
