import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error',
  templateUrl: './html/error.component.html',
  styleUrls: ['./styles/error.component.scss', './styles/stylesheet.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private router:Router, private meta:Meta, private title:Title) { 
    title.setTitle('Payment Termination');
  }


  reTry(){
    this.router.navigate(['/payment-method']);
  }
  ngOnInit() {
    if(!localStorage.getItem('idToken')){
            this.router.navigate(["/login"])
            return
        }
  }

}
