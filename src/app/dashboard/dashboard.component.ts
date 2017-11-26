import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashBoard: boolean = false;
  lineForm: FormGroup;
  randNumber;
  errMsg;
  prodLine;
  constructor(private _fb:FormBuilder, private productService:ProductService) { 
    this.lineForm = _fb.group({
      productName: ["", Validators.required],
      eanNo: ["", Validators.required],
      sku: ["", Validators.required]
    });
  }
  postLineProduct(val){
    this.errMsg = ""
    if(this.lineForm.status == "INVALID"){
      this.errMsg = "Check the input and try again";
      return;
    }

    this.productService.postProductLine(val)
      .then(
        (res)=>{
          console.log("Line Added");
          this.errMsg = "";
          this.lineForm.patchValue({
            productName: null,
            eanNo: null,
            sku: null
          })
        },
        (err)=>{console.log(err)}

    ); 
  }
  numberGenerator(){
    let num = Math.random().toString();
    let num2 = num.slice(2);
    this.randNumber = num2;
  }

  showDashBoard(){
    if(this.dashBoard == true){
      this.dashBoard = false;
      return;
    }
    this.dashBoard = true;
    return;
  }
  ngOnInit() {
    this.prodLine = this.productService.getProductLine();
  }

}
