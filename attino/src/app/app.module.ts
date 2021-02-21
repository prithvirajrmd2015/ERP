import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Core Imports
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { ReactiveValidationModule } from 'angular-reactive-validation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { AlertModule } from './core/ui-component/toster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const JWT_Module_Options: JwtModuleOptions = {
  config: {},
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),FormsModule,ReactiveFormsModule,
    JwtModule.forRoot(JWT_Module_Options),ReactiveValidationModule,AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
