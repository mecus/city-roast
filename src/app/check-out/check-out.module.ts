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


import { ShoppingCartComponent } from './shopping-cart.component';
import { CheckOutComponent } from './check-out.component';
import { OrderComponent } from './order.component';

@NgModule({
    declarations:[
        ShoppingCartComponent,
        CheckOutComponent,
        OrderComponent 
        
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

export class CheckOutModule{}