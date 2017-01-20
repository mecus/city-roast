import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MenuModule } from './menu/menu.module';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AuthModule } from './authentications/auth.module';
import { ProductModule } from './products/product.module';
import { LocalStorageModule } from 'angular-2-local-storage';
import { Ng2PageTransition } from "ng2-page-transition";


import { firebaseConfig, authConfig } from './firebase-config';
import { AuthGuard } from './app-auth-guard.service';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './menu/header.component';
import { FooterComponent } from './menu/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BrewingComponent } from './pages/brewing/brewing.component';
import { CoffeeComponent } from './pages/coffee/coffee.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BrewingComponent,
    CoffeeComponent,
    ContactsComponent,
    TermsComponent,
    PrivacyComponent,
    Ng2PageTransition

  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    MenuModule,
    AppRoutingModule,
    AuthModule,
    ProductModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig),
    LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        })
    
  ],
  providers: [ AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
