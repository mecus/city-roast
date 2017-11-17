import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardRouteModule } from './dashboard-route/dashboard-route.module';

import { DashboardComponent } from './dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CustomersComponent } from './customers/customers.component';
import { OrderViewComponent } from './order-list/item-order.component';
import { NewBlog } from './blogs/newblog/newblog.component';
import { BlogPost } from './blogs/newblog/blog.component';
import { BlogService } from '../services/blog.service';
import { TestService } from "../services/test.service";
import { TransactionComponent } from './transaction/transaction.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule, NgxPaginationModule,
    DashboardRouteModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent, ProductListComponent, 
    OrderListComponent, NewProductComponent, 
    UpdateProductComponent, 
    ContactsComponent, CustomersComponent,
    OrderViewComponent, NewBlog, BlogPost,
    TransactionComponent
  ],
  providers: [BlogService, TestService]
})
export class DashboardModule { }
