import { Component, OnInit } from '@angular/core';
import { Images } from '../shared/images/images';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./stylesheet.scss']
})
export class HeaderComponent implements OnInit {
  isBanner:boolean = false;
  puringCoffee = Images[0]; ourCoffee = Images[1];
  
  constructor() { }

  toggleBanner1(){
    // this.isBanner = true || !this.isBanner;
    this.isBanner = true;
    setInterval(()=>{
      this.isBanner = false ;
    }, 20000);
  }
  toggleBanner2(){
    // this.isBanner = true || !this.isBanner;
    this.isBanner = false;
    setInterval(()=>{
      this.isBanner = true ;
    }, 20000);
  }

  ngOnInit() {
  }

}
