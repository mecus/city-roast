import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedirectComponent } from './redirect.component';
import { OrderSuccessComponent } from './order-success.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RedirectComponent, OrderSuccessComponent]
})
export class RedirectModule { }
