import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './html/error.component.html',
  styleUrls: ['./styles/error.component.scss', './styles/stylesheet.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private router:Router) { }


  reTry(){
    this.router.navigate(['/payment-method']);
  }
  ngOnInit() {
  }

}
