import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CatMenuComponent } from '../menu/cat-menu/cat.menu.component';
import { CartSideComponent } from '../check-out/shopping-cart-side.component';
import { MailService } from '../services/mail.service';


@NgModule({
    imports: [BrowserModule, RouterModule],
    declarations: [CatMenuComponent, CartSideComponent],
    exports: [CatMenuComponent, CartSideComponent],
    providers: [MailService]
})

export class ShareModule {}