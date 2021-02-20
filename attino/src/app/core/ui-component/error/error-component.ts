import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NodeEventHandler } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'at-error',
  template: `<p class="error-font">{{showError}}</p>`,
})
export class ErrorComponent implements OnInit {
  @Input()
  userForm!: FormGroup;
  @Input() errorMessage: any;
  @Input() key:any;
  showError = [''];
  static errorCheck: EventEmitter<number> = new EventEmitter();
  ngOnInit(): void {
    ErrorComponent.errorCheck.subscribe((data) => {
      this.validateError();
    });
  }
  validateError() {
    this.showError = [];
    if (this.userForm.invalid) {
      let controls = this.userForm.controls;
      for (var controlName in controls) {
        if (controls.hasOwnProperty(controlName) && this.key==controlName) {
          let error: any = controls[controlName].errors;
          for (var validation in error) {
            if (error.hasOwnProperty(validation)  && error[validation]) {
              this.showError.push(this.errorMessage[controlName][validation]);
            }
          }
        }
      }
    }
  }
}
