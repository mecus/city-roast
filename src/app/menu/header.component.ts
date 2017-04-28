import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Images, WelcomeImage } from '../shared/images/images';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./stylesheet.scss', './stylesheet.media.scss']
})
export class HeaderComponent implements OnInit {
  isBanner:boolean = false;
  puringCoffee = Images[0]; ourCoffee = WelcomeImage[3];
  margin:number = 0;
  constructor(public _el:ElementRef) { }

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
  slideUp(){
    // alert('Sliding up');
    // let divTarget = document.getElementById('app-header');
    // let node = document.createElement('div');
    // node.id="text"
    // divTarget.appendChild(node);
    // window.pageYOffset;
    // window.scrollBy(100, 700);

   
        // let topage = document.getElementById('app-header');
        // let yPos = window.pageYOffset;

        // if(yPos > 60){
        //   alert("window scroll")

        //   // topage.style.marginTop = "700";
      
        // } else {
        //   // topage.style.display = "none";
        //   alert("No way");

        // }
     
      // window.addEventListener("scroll", yScroll);
    

  }

  ngOnInit() {
    // setInterval(()=>{
    //   this.margin = 20;
    // }, 100);
   
  }

}
