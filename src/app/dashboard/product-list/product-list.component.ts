import { Component, OnInit, HostListener } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { AppService } from '../../services/app.service';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  data={};
    prodKy:string;
    newFile;
    private products = [];
    constructor(private productService:ProductService, public as:AppService, 
    private af:AngularFire, private router:Router) { }
    //===Listening to event in the host html==//
     @HostListener('change', ['$event']) onChange($event) {
            this.newFile = $event.target.files[0];
        
        // console.log(this.newFile);
    }

    //setting the firebase object key//
     prodKey(product){
         console.log('setting prod key');
         console.log(product);
         this.prodKy = product.$key;
     }
     seeProduct(product){
         let id = product.id;
         this.router.navigate(['products/'+id]);

     }
   

    uploadImage(){
        let filename = this.newFile.name;
        let storageRef = firebase.storage().ref('/images/products/' + filename);
        let uploadTask = storageRef.put(this.newFile);
        uploadTask.on('state_changed', (snapshot)=>{

        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
        }, (error)=> {
            console.log(error);
        // Handle unsuccessful uploads
        }, ()=> {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        let downloadURL = uploadTask.snapshot.downloadURL;
        this.data = { imageUrl: uploadTask.snapshot.downloadURL}
        // localStorage.setItem('downloadURL', (downloadURL) );
        this.updateVal();
        console.log(downloadURL);
        
        
        }
    )
    }
    //==CRUD START HERE==//
    updateVal(){
        let key = this.prodKy;
        let ref = firebase.database().ref();
        let dbObject = ref.child("products/"+key);
        dbObject.update(this.data).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        });
     }
     deleteProduct(product){
         let D = confirm('Are you sure you wan to delete this product');
         if(D==true){
             this.productService.removeProduct(product.$key);
         }
         this.router.navigate(['/dashboard/products-list'])
        
     }
     
     //==CRUD ENDS HERE==//
     getValue(data){ //getting value for database update//
        this.productService.getUpdateVal(data);
        this.router.navigate(['/dashboard/update-product'])
     }

    ngOnInit() {
        this.productService.getProduct()
            .subscribe((product)=>{
                this.products = product;
            });
  
     }
}
