
import { EventEmitter, ContentChildren, QueryList,ChangeDetectionStrategy } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { OnDestroy, OnChanges, AfterContentInit } from '@angular/core';

import { StepComponent } from './step/step.component';

@Component({
  selector: 'at-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class StepperComponent {

  private currentStep: number = 2;
  private internalSteps!: QueryList<StepComponent>;

  @Input() counter = 1;
  @Output() counterChange = new EventEmitter<number>()

  ngOnChanges() {
    this.currentStep = this.counter;
    if (this.internalSteps) {
      this.setChildSteps();
    }
  }

  @ContentChildren(StepComponent)
  set stepsContent(steps: QueryList<StepComponent>) {
    if (steps) {
      this.internalSteps = steps;
      this.internalSteps.last.isLast = true;
      this.internalSteps.first.isFirst = true;
      this.registerSteps();
    }
  }

  nextStep() {
    this.counter++
    this.counterChange.emit(this.counter);
  }

  prevStep() {
    this.counter--
    this.counterChange.emit(this.counter);
  }

  setStep(step:any) {
    this.counterChange.emit(step);
  }

  private registerSteps(): void {
    this.internalSteps.toArray().forEach((step: StepComponent, idx: number) => {
      step.currentStep = this.currentStep;
      step.stepNumber = idx + 1;
    });
  }

  private setChildSteps(): void {
    this.internalSteps.toArray().forEach((step: StepComponent, idx: number) => {
      step.currentStep = this.currentStep;
    });
  }
}
