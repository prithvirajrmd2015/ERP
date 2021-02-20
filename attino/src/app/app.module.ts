import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Core Imports
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { ReactiveValidationModule } from 'angular-reactive-validation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const JWT_Module_Options: JwtModuleOptions = {
  config: {},
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),FormsModule,ReactiveFormsModule,
    JwtModule.forRoot(JWT_Module_Options),ReactiveValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
