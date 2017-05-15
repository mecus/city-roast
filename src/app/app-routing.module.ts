import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BrewingComponent } from './pages/brewing/brewing.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ReturnComponent } from './pages/return/return.component';
import { CoffeeComponent } from './pages/coffee/coffee.component';
import { SignUpComponent } from './authentications/signup.component';
import { LoginComponent } from './authentications/login.component';
import { PasswordResetComponent } from './authentications/password-reset.component';
import { AccountComponent } from './authentications/accounts/account.component';


// import { ProductformComponent } from './products/product-form.component';
// import { ProductsComponent } from './products/product.component';
import { ProductViewComponent } from './products/product-view.component';
// import { ProductUpdateComponent } from './products/product-update.component';
import { ShoppingCartComponent } from './check-out/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderComponent } from './check-out/order.component';
import { PaymentMethodComponent } from './check-out/payment-method.component';

// import { DashboardComponent } from './dashboard/dashboard.component';


import { ErrorComponent } from './redirect/error.component';
import { OrderSuccessComponent} from './redirect/order-success.component';

import { AuthGuard } from './app-auth-guard.service';


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
    {path: 'about', component: AboutComponent },
    {path: 'brewing', component: BrewingComponent},
    {path: 'coffees', component: CoffeeComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'account', component: AccountComponent},
    {path: 'contacts', component:ContactsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'coffees/:id', component: ProductViewComponent},
    {path: 'cart', component: ShoppingCartComponent},
    {path: 'terms', component: TermsComponent},
    {path: 'return-policy', component:ReturnComponent},
    {path: 'checkout', component: CheckOutComponent},
    {path: 'order', component: OrderComponent},
    {path: 'exception', component: ErrorComponent},
    {path: 'payment-confirmation', component: OrderSuccessComponent},
    {path: 'payment-method', component: PaymentMethodComponent},
    {path: 'password-reset', component: PasswordResetComponent},
    root,
    fallBack
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
