import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { AngularFire } from 'angularfire2';
import * as fbase from 'firebase';
import { Location } from '@angular/common';

import { UploadService } from '../../services/upload.service';
import { ProductService } from '../../services/product.service';

var firebase: any;
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

   newproduct: FormGroup;
    private selectedFile;
    lastProduct;
    lastId;
    constructor(private fb: FormBuilder, private af:AngularFire, 
    private upload:UploadService, private productService:ProductService, 
    private router: Router, private _location:Location) {

        this.newproduct = fb.group({
            id: "",
            name: ["", Validators.minLength(2) ],
            oldprice:"",
            price: [""],
            code: ["", Validators.minLength(4)],
            blend: "",
            size: "",
            roast: "",
            imageUrl: "",
            category: "",
            description: ["", Validators.minLength(20)]
        });
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
        this.productService.addProduct(product);
       
         this.router.navigate(['/dashboard/products-list']);
     }
     getLastProdId(){
        this.productService.getProduct().subscribe((data)=>{
             this.lastProduct = data;
         });
         
         let product = this.lastProduct.reverse();
         if(this.lastProduct.length > 0){
             let id = parseInt(product[0].id) + 1;
             this.lastId = id.toString();
         }else{
             let id = 0 + 1;
             this.lastId = id.toString();
         }
         
         
     }
     

    ngOnInit() {
        this.getLastProdId();
        this.patchValue(); 
     }


}
