import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { BlogService } from '../services/blog.service';
import { Observable } from 'rxjs/Observable';
import { animate, state, trigger, transition, style } from '@angular/animations';

@Component({
    selector: 'home-header',
    templateUrl: './home.header.component.html',
    styleUrls: ['./home.component.scss', './home.media-query.scss'],
      
})

export class HomeMenuComponent implements OnInit {
    actions = true;
    constructor(private router:Router){}
     public coffee(){
        this.router.navigate(["products/?", {category: "coffees", dispay: "true"}]);
    }
    public coffeeMachine(){
        this.router.navigate(["products/?", {category: "coffee_machine", dispay: "true"}]);
    }
    public accessories(){
        this.router.navigate(["products/?", {category: "accessories", dispay: "true"}]);
    }
    ngOnInit(){

    }
}