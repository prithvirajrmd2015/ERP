import { Component, OnInit, Input, Host, Inject, ChangeDetectionStrategy } from '@angular/core';
import { StepperComponent } from '../stepper.component';

@Component({
  selector: 'at-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepComponent implements OnInit {
  stepNumber = 0;
  isLast = false;
  isFirst = false;
  currentStep = 1;

  constructor() {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log(`ngDoCheck: ${this.stepNumber}`);
  }

}
