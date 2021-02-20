import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'at-button',
  template: `
  <input
    [name]="name"
    id="login"
    [class]="customClass != null ? customClass : 'btn btn-block at-btn mb-4'"
    type="button"
    [value]="value" (click)="onClickButton($event)" 
  />`,
  styleUrls: ['./inputs.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}
  @Input() lable:any;
  @Input() customClass: any;
  @Input() name: any;
  @Input() value: any;
  @Output() onClick = new EventEmitter<any>();

  ngOnInit(): void {}

  onClickButton(event:any) {
    this.onClick.emit(event);
  }
}

@Component({
  selector: 'at-input',
  template: `   <label [for]="controlName" class="sr-only">{{lableString}}</label>
  <input
    [type]="type"
    [name]="controlName" 
    class="form-control"
    [placeholder]="placeholder"
    [value]="value"
    autocomplete="off"
    [(ngModel)]="value"
  />`,
  styleUrls: ['./inputs.component.scss'],providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements OnInit ,ControlValueAccessor{

  @Input() customClass: any;
  @Input() name:any;
  @Input() controlName: any;
  @Input() type: any;
  @Input() placeholder: any;
  @Input() lableString:any;
  
  constructor() { }
  ngOnInit(): void {
  }

  onChange: any = () => {}
  onTouch: any = () => {}
  val= ""

  set value(val:any){
    if( val !== undefined && this.val !== val){
    this.val = val
    this.onChange(val)
    this.onTouch(val)
    }
   
  }

  writeValue(value: any){
    this.value = value
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(fn: any){
    this.onTouch = fn
  }

}
