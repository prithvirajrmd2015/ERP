import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentModule } from './ui-component/ui-component.module';
import { ReactiveValidationModule } from 'angular-reactive-validation';

@NgModule({
  declarations: [],
  imports: [CommonModule, UiComponentModule,ReactiveValidationModule],
  exports: [UiComponentModule,ReactiveValidationModule],
})
export class CoreModule {}
