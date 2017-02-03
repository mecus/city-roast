import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from '../app-routing.module';

import { CommonModule } from '@angular/common';
import { SignUpComponent } from './signup.component';
import { LoginComponent } from './login.component';
import { AuthService } from './auth-service';



@NgModule({
    declarations: [SignUpComponent, LoginComponent],

    imports: [CommonModule, FormsModule, ReactiveFormsModule, AppRoutingModule],

    exports: [],

    providers: [AuthService]
})

export class AuthModule {}