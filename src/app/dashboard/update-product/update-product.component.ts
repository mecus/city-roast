import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
declare var $:any;
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

   updateVal:FormGroup;
    patchdata;
    updatedVal;
    constructor(private fb:FormBuilder, private productService:ProductService,
            private router:Router, private _location:Location, private testService:TestService) { 
        this.updateVal = fb.group({
            name: ["", ],
            oldprice:"",
            price: ["", ],
            code: ["", ],
            category:this.category(),
            blend: "",
            tag: "",
            size: "",
            roast: "",
            imageUrl: "",
            description: ["",]
        });
  
    }
    category(){
        return this.fb.group({
            name: "", group: ""
        })
    }
    back(){
      this.router.navigate(['/dashboard/products-list']);
        // this._location.back();
    }

    updateProd(product){
        // console.log(this.patchdata.key);
        if(this.productService.rdata){
            this.productService.updateProduct(this.patchdata.key, product);
        }else{
            alert("Update can't continue..Please go back to products and select again!")
        }
        this.router.navigate(['dashboard']);
     }
    ngOnInit() { 
        this.patchdata = this.productService.rdata;
        if(this.productService.rdata){
            console.log(this.patchdata);
            setTimeout(()=>{
                this.updateVal.patchValue({
                    name: this.patchdata.data.name,
                    oldprice: this.patchdata.data.oldprice,
                    price: this.patchdata.data.price,
                    code: this.patchdata.data.code,
                    category: {name: this.patchdata.data.category.name, group:this.patchdata.data.category.group},
                    //  <!--Add Blend, Size, and Roast-->
                    tag: this.patchdata.data.tag,
                    blend: this.patchdata.data.blend,
                    size: this.patchdata.data.size,
                    roast: this.patchdata.data.roast,
                    imageUrl: this.patchdata.data.imageUrl,
                    description: this.patchdata.data.description
                });
            }, 300);
            // $(document).ready(function() {
            //     $('select').material_select();
            // });
        }
        // $(document).ready(function() {
        //     $('select').material_select();
        // });
    }


}
