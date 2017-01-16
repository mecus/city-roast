import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BrewingComponent } from './pages/brewing/brewing.component';
import { CoffeeComponent } from './pages/coffee/coffee.component';
import { SignUpComponent } from './authentications/signup.component';
import { LoginComponent } from './authentications/login.component';

import { ProductformComponent } from './products/product-form.component';
import { ProductsComponent } from './products/product.component';
import { ProductViewComponent } from './products/product-view.component';
import { ProductUpdateComponent } from './products/product-update.component';
import { ShoppingCartComponent } from './products/shopping-cart.component';

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
    {path: 'coffee', component: CoffeeComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'login', component: LoginComponent},
    {path: 'product/new', component: ProductformComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/:id', component: ProductViewComponent},
    {path: 'product/update', component:ProductUpdateComponent},
    {path: 'cart', component: ShoppingCartComponent},
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