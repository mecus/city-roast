import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AppRoutingModule } from '../app-routing.module';

import { AppService } from '../services/app.service';
import { UploadService } from '../services/upload.service';
import { ProductService } from '../services/product.service';
import { CheckOutService } from '../services/check-out.service';
import { MailService } from '../services/mail.service';


import { ShoppingCartComponent } from './shopping-cart.component';
import { CheckOutComponent } from './check-out.component';
import { OrderComponent } from './order.component';
import { PaymentMethodComponent } from './payment-method.component';
import { CartSideComponent } from "./shopping-cart-side.component";
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@NgModule({
    declarations:[
        ShoppingCartComponent,
        CheckOutComponent,
        OrderComponent ,
        PaymentMethodComponent
        
    ],

    imports: [
        BrowserModule, HttpModule,
        FormsModule, ReactiveFormsModule,
        LocalStorageModule, RouterModule,
        AppRoutingModule
    ],
    exports: [],
    providers:[AppService, UploadService, ProductService, 
        CheckOutService, MailService, CartService, OrderService
    ]


})

export class CheckOutModule{}