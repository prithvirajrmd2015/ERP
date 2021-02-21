import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentModule } from './ui-component/ui-component.module';
import { ReactiveValidationModule } from 'angular-reactive-validation';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, UiComponentModule,ReactiveValidationModule,HttpClientModule],
  exports: [UiComponentModule,ReactiveValidationModule],
  providers:[]
})
export class CoreModule {}
