import { Component, OnInit, Output, OnDestroy, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder } from '@angular/forms';
import { Images, WelcomeImage } from '../shared/images/images';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CheckOutService } from '../services/check-out.service';
import { AppService } from '../services/app.service';
import { BlogService } from '../services/blog.service';
import { Observable } from 'rxjs/Observable';
import { animate, state, trigger, transition, style } from '@angular/animations';
import * as _ from 'lodash';
import { Meta, Title } from '@angular/platform-browser';
import { MailService } from '../services/mail.service';

declare var jquery: any;
declare var $:any;

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
export class HomeComponent implements OnInit, OnDestroy {
  image = WelcomeImage;
  coffees; machines; accessories;
  blogs;
  displayImg = WelcomeImage[2];
  isHide:boolean = true;
  itemAdd:boolean = false;
  isLogin:boolean =false;
  isSlider:boolean = false;
  subAlert;
  state = "small";
  subForm:FormGroup;
  subscib:boolean = true;

  subsuccess:boolean = false;
  constructor(private productService:ProductService, 
              private router:Router, private appService:AppService,
              private cartService:CheckOutService, private _fb:FormBuilder,
              private blogService:BlogService,
              private meta:Meta, public title:Title,
              private mailService: MailService
              ) { 
                title.setTitle(`Welcome to London City Roast`);
                meta.addTags([
                  {
                    name: `Coffee Roaster`, 
                    content: `Welcome to London City Roast. We roast over 100 wonderful coffees from around the world,
                    including rare and exclusive varieties `
                  }
                ])
                this.subForm = this._fb.group({
                  subscriber: [""]
                });
                
              }
  sendMail(){
    // this.router.navigate(["/welcome?",{'email': 'austin@miscotech.co.uk'}]);
    // this.mailService.sendWelcomeMail('austin@miscotech.co.uk')
    // .subscribe(res=>{
    //   console.log(res);
    // });
  }
  readPost(blog){
    this.router.navigate(["/blog/?", {key: blog.key, title: blog.data.title}])
  }
  seeSlidepic(){
    this.isSlider = true;
  }
  closeSlidepix(){
    this.isSlider = false;
  }

  viewProduct(data):void{
    this.router.navigate(['/product/?', {id: data.id, product_name: data.name}]);

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
    if(this.subForm.status == "INVALID"){
      this.subsuccess = false;
      this.subAlert = "Please check and enter a valid email";
    }else{
      this.appService.subscription(subscribe);
      this.subAlert = "";
      this.subsuccess = true;
      this.subForm = this._fb.group({
          subscriber: ""
        });
    }
  }
  private closeSub(){
    this.subscib = false;
  }
  slideInterval = window.setInterval(()=>{
        $('.carousel').carousel('next');
      }, 10000);

  ngOnInit() {
    $(document).ready(function(){
      $('.carousel.carousel-slider').carousel({fullWidth: true});
      $('.materialboxed').materialbox();
      this.slideInterval;
    });
    // Get products for the three sections
    this.productService.getCacheProduct().subscribe((product)=>{
      this.coffees = _.take((_.filter(product, {"tag": "coffees"})), 4);
      this.machines = _.take((_.filter(product, {"tag": "machines"})),4);
      this.accessories = _.take((_.filter(product, {"tag": "accessories"})),4);
    });
      
      this.blogService.getCacheBlog().subscribe((blogs)=>{
        this.blogs = _.reverse(_.take(blogs, 3));
      })
  }
  ngOnDestroy(){
    window.clearInterval(this.slideInterval);
  }
}
