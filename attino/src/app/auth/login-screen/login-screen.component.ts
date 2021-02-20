import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ErrorComponent } from 'src/app/core/ui-component/error/error-component';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: any = {
    userName: { required: 'Required user name' },
    password: { required: 'Required password' },
  };
  showError = [''];
  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  formSubmit() {
    ErrorComponent.errorCheck.emit();
  }
}
