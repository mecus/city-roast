import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import * as pages from './containers/page-index';

// import { CoffeeComponent } from './pages/coffee/coffee.component';
import { SignUpComponent } from './authentications/signup.component';
import { LoginComponent } from './authentications/login.component';
import { PasswordResetComponent } from './authentications/password-reset.component';
import { AccountComponent } from './authentications/accounts/account.component';


// import { ProductformComponent } from './products/product-form.component';
// import { ProductsComponent } from './products/product.component';
import * as product from './products/product-index';

// import { ProductUpdateComponent } from './products/product-update.component';
import { ShoppingCartComponent } from './check-out/shopping-cart.component';

import { CheckOutComponent } from './check-out/check-out.component';
import { OrderComponent } from './check-out/order.component';
import { PaymentMethodComponent } from './check-out/payment-method.component';

import { DashboardComponent } from './dashboard/dashboard.component';


import { ErrorComponent } from './redirect/error.component';
import { OrderSuccessComponent} from './redirect/order-success.component';

// import { AuthGuard } from './app-auth-guard.service';



const fallBack: Route = {
    path: '**', component: HomeComponent
}

const root: Route = {
    path: '', 
        redirectTo: '/home', pathMatch: 'full'
}

const routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: pages.AboutComponent },
    {path: 'brewing', component: pages.BrewingComponent},
    {path: 'coffees', component: product.CoffeeComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'account', component: AccountComponent},
    {path: 'contacts', component:pages.ContactsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'product/?', component: product.ProductViewComponent},
    {path: 'cart', component: ShoppingCartComponent},
    {path: 'terms', component: pages.TermsComponent},
    {path: 'return-policy', component: pages.ReturnComponent},
    {path: 'checkout', component: CheckOutComponent},
    {path: 'order', component: OrderComponent},
    {path: 'exception', component: ErrorComponent},
    {path: 'payment-confirmation', component: OrderSuccessComponent},
    {path: 'payment-method', component: PaymentMethodComponent},
    {path: 'password-reset', component: PasswordResetComponent},
    {path: 'products/?', component: product.CategoryComponent},
    {path: 'coffee_machine', component: product.MachineComponent},
    {path: 'accessories', component: product.AccessoryComponent},
    {path: 'blog/?', component: pages.BlogPostComponent},
    // {path: 'dashboard', component: DashboardComponent},
    root,
    // fallBack
]
//canActivate: [AuthGuard]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
