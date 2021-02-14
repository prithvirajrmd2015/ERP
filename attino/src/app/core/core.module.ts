import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentModule } from './ui-component/ui-component.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UiComponentModule],
  exports: [UiComponentModule],
})
export class CoreModule {}
