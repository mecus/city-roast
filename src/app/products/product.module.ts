import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AppRoutingModule } from '../app-routing.module';

import { AppService } from '../services/app.service';
import { UploadService } from '../services/upload.service';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

// import { ProductformComponent } from './product-form.component';
// import { ProductsComponent } from './product.component';
import { ProductViewComponent } from './product-view.component';
// import { ProductUpdateComponent } from './product-update.component';
// import { DashboardComponent } from '../menu/dashboard/dashboard.component';


@NgModule({
    declarations:[
        ProductViewComponent
   
        
    ],

    imports: [
        BrowserModule, HttpModule,
        FormsModule, ReactiveFormsModule,
        AngularFireModule, LocalStorageModule,
        AppRoutingModule
    ],
    exports: [
  
    ],
    providers:[AppService, UploadService, ProductService, CartService]


})

export class ProductModule{}