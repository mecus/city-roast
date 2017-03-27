import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
    selector: 'product-update',
    templateUrl: 'product-update.component.html',
    styleUrls: ['product.component.scss']
})
export class ProductUpdateComponent implements OnInit {
    updateVal:FormGroup;
    patchdata;
    updatedVal;
    constructor(private fb:FormBuilder, private productService:ProductService,
            private router:Router, private _location:Location) { 
        this.updateVal = fb.group({
            name: ["", ],
            price: ["", ],
            code: ["", ],
            imageUrl: "",
            description: ["",]
        });
  
    }
    back(){
        this._location.back();
    }

    updateProd(product){
        if(this.productService.rdata){
            this.productService.updateProduct(this.patchdata.$key, product);
        }else{
            alert("Update can't continue..Please go back to products and select again!")
        }
        this.router.navigate(['/products']);
     }
    ngOnInit() { 
        this.patchdata = this.productService.rdata;
        if(this.productService.rdata){
            this.updateVal.patchValue({
                name: this.patchdata.name,
                price: this.patchdata.price,
                code: this.patchdata.code, 
                imageUrl: this.patchdata.imageUrl,
                description: this.patchdata.description,
            });
        }
    }

}