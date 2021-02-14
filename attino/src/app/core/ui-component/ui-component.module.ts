import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, TextInputComponent } from './inputs/inputs.component';

@NgModule({
  declarations: [ButtonComponent, TextInputComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, TextInputComponent],
})
export class UiComponentModule {}
