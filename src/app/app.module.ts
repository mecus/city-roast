import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { firebaseConfig } from './firebase-config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MaterializeModule } from 'angular2-materialize'
import { LocalStorageModule } from 'angular-2-local-storage';



import { AppComponent } from './app.component';
import { AppService } from './services/app.service';
import { AuthModule } from './authentications/auth.module';
import { MenuModule } from './menu/menu.module';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './menu/header.component';
import { HomeMenuComponent } from './home/home.header.component';
import { CheckOutService } from './services/check-out.service';
import { FooterComponent } from './menu/footer.component';
import { ProductService } from './services/product.service';
import { BlogService } from './services/blog.service';

//need to be lazy loaded
import { PagesModule } from './containers/pages.module';
// import { CatMenuComponent } from './menu/cat.menu.component';
import { ProductModule } from './products/product.module';
import { CheckOutModule } from './check-out/check-out.module';
import { RedirectModule } from './redirect/redirect.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthGuard } from './app-auth-guard.service';
import { DbService } from './services/db.service';


const Components = [
  AppComponent, MenuComponent, HomeComponent, HeaderComponent,
  HomeMenuComponent, FooterComponent
]
const Modules = [
  BrowserModule,BrowserAnimationsModule,MaterializeModule,
  FormsModule, ReactiveFormsModule,MenuModule, PagesModule,
  HttpClientModule, RouterModule,AuthModule,AppRoutingModule,
  ProductModule, CheckOutModule, RedirectModule,
  AngularFireAuthModule,AngularFireDatabaseModule,
  AngularFireModule.initializeApp(firebaseConfig),
  LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        }),
  DashboardModule
]


@NgModule({
  declarations: Components,
  imports: Modules,
  providers: [ 
    AppService, CheckOutService, ProductService,
    BlogService, AuthGuard, DbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
