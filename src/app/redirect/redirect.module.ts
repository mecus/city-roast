import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { OrderSuccessComponent } from './order-success.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ErrorComponent, OrderSuccessComponent]
})
export class RedirectModule { }
