import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Core Imports
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
const JWT_Module_Options: JwtModuleOptions = {
  config: {},
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    JwtModule.forRoot(JWT_Module_Options),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
