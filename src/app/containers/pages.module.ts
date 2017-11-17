import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import * as page from './page-index';
@NgModule({
    declarations: [
        page.AboutComponent, page.ContactsComponent,
        page.BrewingComponent, page.ReturnComponent,
        page.TermsComponent, page.BlogPostComponent
    ],
    imports: [
        BrowserModule, FormsModule, ReactiveFormsModule,
        HttpModule
    ],
    exports: []
})

export class PagesModule {}