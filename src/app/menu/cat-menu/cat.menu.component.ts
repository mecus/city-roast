import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'cat-menu',
    templateUrl: 'cat.menu.html',
    styleUrls: ['cat.menu.scss']
})

export class CatMenuComponent implements OnInit {
    coffees:boolean = false;
    machine:boolean = false;
    accessory:boolean = false;
    sticky:boolean = false;
    constructor(private router:Router){}

    coffee(){
        this.coffees = true;
        this.accessory = false;
        this.machine = false;
        this.router.navigate(["products/?", {category: "coffees"}]);
    }
    coffeeMachine(){
        this.machine = true;
        this.accessory = false;
        this.coffees = false;
        this.router.navigate(["products/?", {category: "coffee_machine"}]);
    }
    
    accessories(){
        this.accessory = true;
        this.machine = false;
        this.coffees = false;
        this.router.navigate(["products/?", {category: "accessories"}]);
  }
  offsetPage(){
      let _el = document.getElementById('stick');
      let topPos = _el.offsetTop;

      if(topPos > 110){
        //   alert('page is scrolled');
        //   this.sticky = true;
      }
  }

  ngOnInit(){
    this.offsetPage();
  }

}