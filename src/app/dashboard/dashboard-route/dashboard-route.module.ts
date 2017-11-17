import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { OrderListComponent } from '../order-list/order-list.component';
import { NewProductComponent } from '../new-product/new-product.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { CustomersComponent } from '../customers/customers.component';
import { OrderViewComponent } from '../order-list/item-order.component';
import { NewBlog } from '../blogs/newblog/newblog.component';
import { BlogPost } from '../blogs/newblog/blog.component';

import { AuthGuard } from '../../app-auth-guard.service';
import { TransactionComponent } from '../transaction/transaction.component';


const dashRoutes:Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children:[
      {path: '', component: ProductListComponent},
      {path: 'products-list', component: ProductListComponent},
      {path: 'orders-list', component: OrderListComponent},
      {path: 'new-product', component: NewProductComponent},
      {path: 'update-product', component: UpdateProductComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'customers', component: CustomersComponent},
      {path: 'order/:id', component: OrderViewComponent},
      {path: 'blogs', component: BlogPost},
      {path: 'newblog', component:NewBlog},
      {path: 'transactions', component: TransactionComponent}
    ]
  }
]
// canActivate:[AuthGuard]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashRoutes)
  ],
  exports: [
    RouterModule
  ],

  declarations: []
})
export class DashboardRouteModule { }
