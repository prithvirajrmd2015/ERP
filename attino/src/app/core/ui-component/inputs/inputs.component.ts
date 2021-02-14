import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'at-button',
  template: ` <input
    [name]="formControlName"
    id="login"
    [class]="customClass != null ? customClass : 'btn btn-block at-btn mb-4'"
    type="button"
    [value]="value"
  />`,
  styleUrls: ['./inputs.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}
  @Input() customClass: any;
  @Input() formControlName: any;
  @Input() value: any;
  ngOnInit(): void {}
}

@Component({
  selector: 'at-input',
  template: ` <input
    [type]="type"
    [name]="formControlName"
    class="form-control"
    [placeholder]="placeholder"
    [value]="value!=null?value:''"
    autocomplete="off"
  />`,
  styleUrls: ['./inputs.component.scss'],
})
export class TextInputComponent implements OnInit {
  constructor() {}
  @Input() customClass: any;
  @Input() formControlName: any;
  @Input() type: any;
  @Input() placeholder: any;
  @Input() value: any;
  ngOnInit(): void {}
}
