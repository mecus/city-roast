import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent implements OnInit {

    constructor(private _router:Router){}


  ngOnInit(){
    console.log(localStorage);
    this._router.events.subscribe((event) => {
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            // window.scrollTo(0, 0)
            setTimeout(function(){
                window.scrollTo(0, 1);
            }, 0);
        });
  }
}
