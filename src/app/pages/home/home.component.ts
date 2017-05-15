import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder } from '@angular/forms';
import { Images, WelcomeImage } from '../../shared/images/images';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AppService } from '../../services/app.service';
import { BlogService } from '../../services/blog.service';
import { Observable } from 'rxjs/Observable';
import { animate, state, trigger, transition, style } from '@angular/animations';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.media-query.scss'],
  animations: [
    trigger('zoom', [
      state('small', style({
        backgroundColor: '#000',
        color: '#fff',
        transform: 'scale(1)'
      })),
      state('large', style({
        backgroundColor: '#ff0',
        transform: 'scale(1.1)'
      })),
      transition('small => large', animate('100ms ease-out')),
      transition('large => small', animate('100ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {
  title = "Welcome";
  image = WelcomeImage;
  products = [];
  mProducts = [];
  blogs;
  displayImg = WelcomeImage[2];
  isHide:boolean = true;
  itemAdd:boolean = false;
  isLogin:boolean =false;
  isSlider:boolean = false;

  state = "small";
  subForm:FormGroup;
  subscib:boolean = true;

  subsuccess:boolean = false;
  constructor(private productService:ProductService, 
              private router:Router, private appService:AppService,
              private cartService:CartService, private _fb:FormBuilder,
              private blogService:BlogService
              ) { }
  
  

  seeSlidepic(){
    this.isSlider = true;
  }
  closeSlidepix(){
    this.isSlider = false;
  }

  viewProduct(data):void{
    let param = data.id;
    this.router.navigate(['coffees/'+param]);

  }
  selectImg(image){
    this.displayImg =image;
    this.isHide = false;
  }
  closeImage(){
    this.isHide = true;
  }
  toggleState(){
    this.state = this.state? "large" : "small";
  }

  subscription(subscribe){
    // console.log(subscribe);
    this.appService.subscription(subscribe).subscribe((res)=>{
      setTimeout(()=>{
        this.subsuccess = true;
      }, 500)
      
    })
    this.subForm = this._fb.group({
        subscriber: ""
      });
    
  }
  private closeSub(){
    this.subscib = false;
  }
  ngOnInit() {
    this.subForm = this._fb.group({
      subscriber: [""]
    });

    this.productService.getProduct()
        .subscribe(products=>{
          this.mProducts = products.filter((product)=>{
            return product.category === "Sales";
          })
          // this.mProducts = products.reverse();
        });
      
    this.productService.getProduct()
        .subscribe(product=>{
          let products = product.filter((product)=>{
            return product.category === "Sales";
          })
          
          products.reverse();
          
          if (products.length > 1){
            products.length = 5
            this.products = products;
          }else{
            if(products.length >= 3){
              products.length = 3
              this.products = products
            }
          }
        });
      
      this.blogService.getBlog().subscribe((blogs)=>{
        this.blogs = blogs;
      })
  }

}
