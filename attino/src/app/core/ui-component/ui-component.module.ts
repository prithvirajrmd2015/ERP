import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, TextInputComponent } from './inputs/inputs.component';
import { StepperComponent } from './stepper/stepper.component';
import { StepComponent } from './stepper/step/step.component';
import {
  H1DisplayComponent,
  H2DisplayComponent,
  H3DisplayComponent,
  ParagraphDisplayComponent,
} from './display/display.component';

@NgModule({
  declarations: [
    ButtonComponent,
    TextInputComponent,
    StepperComponent,
    StepComponent,
    H1DisplayComponent,
    H2DisplayComponent,
    H3DisplayComponent,
    ParagraphDisplayComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    TextInputComponent,
    StepperComponent,
    StepComponent,
    H1DisplayComponent,
    H2DisplayComponent,
    H3DisplayComponent,
    ParagraphDisplayComponent,
  ],
})
export class UiComponentModule {}
