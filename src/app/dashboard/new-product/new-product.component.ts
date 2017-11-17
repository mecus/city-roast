import { Component, OnInit, HostListener, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import * as fbase from 'firebase';
import * as _ from 'lodash';
declare var $:any;
import { Location } from '@angular/common';

import { UploadService } from '../../services/upload.service';
import { ProductService } from '../../services/product.service';
import { TestService } from "../../services/test.service";
// import { TestProduct } from '../../services/test.product';

var firebase: any;
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit, AfterContentInit {

   newproduct: FormGroup;
    private selectedFile;
    lastProduct;
    lastId;
    errMsg;
    constructor(private fb: FormBuilder, 
    private upload:UploadService, private productService:ProductService, 
    private router: Router, private _location:Location, private testService:TestService) {

        this.newproduct = fb.group({
            id: "",
            name: ["", Validators.minLength(2) ],
            oldprice:"",
            price: [""],
            code: ["", Validators.minLength(4)],
            blend: "",
            size: "",
            tag: "",
            roast: "",
            imageUrl: "",
            category: this.category(),
            description: ["", Validators.minLength(20)]
        });
     }
     category(){
         return this.fb.group({
             name: "",
             group: ""
         })
     }
     patchValue(){
        this.newproduct.patchValue({
            imageUrl: "image/image.jpg",
            id: this.lastId || 100
        });
    }
     storeImage(){
         this.upload.uploadImage(this.selectedFile);
        
     }
     createProd(product:Product){
        //  console.log(product);
        this.productService.addProduct(product)
            .then(res=>{
                console.log('Product Created Successfully');
                this.router.navigate(['/dashboard/products-list']);
            }, (err)=>{
                console.log(err);
                this.errMsg = "Product was not added! please try again."
            })
        
        //testing service
        // this.testService.addProduct(product);
         
     }
     getLastProdId(){
        this.productService.getProduct().subscribe((data)=>{
             this.lastProduct = _.last(data);
             this.lastId = Number(this.lastProduct.id) + 1;
            //  console.log(this.lastId + 1);
            this.patchValue();
         });
         
     }
     

    ngOnInit() {
        this.getLastProdId();
     }
     ngAfterContentInit(){
 
     }

}
