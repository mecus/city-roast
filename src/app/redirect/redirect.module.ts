import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { OrderSuccessComponent } from './order-success.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ErrorComponent, OrderSuccessComponent]
})
export class RedirectModule { }
