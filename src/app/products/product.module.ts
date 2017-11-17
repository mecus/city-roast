import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { NgxPaginationModule } from 'ngx-pagination';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AppRoutingModule } from '../app-routing.module';
import { ShareModule } from '../share-modules/share.module';
import { AppService } from '../services/app.service';
import { UploadService } from '../services/upload.service';
import { ProductService } from '../services/product.service';
import { CheckOutService } from '../services/check-out.service';
import * as product from './product-index';
import { CartService } from '../services/cart.service';

// import { ProductformComponent } from './product-form.component';
// import { ProductUpdateComponent } from './product-update.component';
// import { DashboardComponent } from '../menu/dashboard/dashboard.component';


@NgModule({
    declarations:[
        product.ProductViewComponent, product.CoffeeComponent,
        product.CategoryComponent,
        product.MachineComponent,
        product.AccessoryComponent
   
        
    ],

    imports: [
        BrowserModule, HttpModule,
        FormsModule, ReactiveFormsModule,
        LocalStorageModule, ShareModule,
        AppRoutingModule, NgxPaginationModule
    ],
    exports: [
  
    ],
    providers:[AppService, UploadService, 
        ProductService, CheckOutService,
        CartService
    ]


})

export class ProductModule{}