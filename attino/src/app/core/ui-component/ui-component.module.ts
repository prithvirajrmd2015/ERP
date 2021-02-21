import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent, TextInputComponent } from "./inputs/inputs.component";

import {
  H1DisplayComponent,
  H2DisplayComponent,
  H3DisplayComponent,
  ParagraphDisplayComponent,
} from "./display/display.component";
import { ArchwizardModule } from "./wizard/archwizard.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ErrorComponent } from "./error/error-component";
import { AlertService } from "./toster";

@NgModule({
  declarations: [
    ButtonComponent,
    TextInputComponent,
    H1DisplayComponent,
    H2DisplayComponent,
    H3DisplayComponent,
    ParagraphDisplayComponent,
    ErrorComponent,
  ],
  imports: [CommonModule, ArchwizardModule, FormsModule, ReactiveFormsModule],
  exports: [
    ButtonComponent,
    TextInputComponent,
    H1DisplayComponent,
    H2DisplayComponent,
    H3DisplayComponent,
    ParagraphDisplayComponent,
    ArchwizardModule,
    ErrorComponent,
  ],providers:[AlertService]
})
export class UiComponentModule {}
