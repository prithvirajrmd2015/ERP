import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { CoreModule } from '../core/core.module';
import { AuthGuardService } from './services/auth-guard-service.service';
import { AuthService } from './services/auth-service.service';
import {
  JwtHelperService,
  JwtModule,
  JwtModuleOptions,
  JWT_OPTIONS,
} from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginScreenComponent, RegisterScreenComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule,FormsModule,ReactiveFormsModule
  ],
  providers: [AuthGuardService, AuthService],
})
export class AuthModule {}
