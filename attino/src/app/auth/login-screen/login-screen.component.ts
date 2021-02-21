import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiHttpService } from 'src/app/core/services/api-service-call';
import { AIP_CALL_TO } from 'src/app/core/services/config';
import { ErrorComponent } from 'src/app/core/ui-component/error/error-component';
import { ModalService } from 'src/app/core/ui-component/modal';
import { AlertService } from 'src/app/core/ui-component/toster';

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
  constructor(
    public formBuilder: FormBuilder,
    public apiService: ApiHttpService,public alertService:AlertService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  formSubmit() {
    ErrorComponent.errorCheck.emit(this.loginForm);
    this.alertService.error('errorMessage', 'Opps');

    if (!this.loginForm.invalid) {
      this.apiService.get(AIP_CALL_TO.login).subscribe((data: any) => {});
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}
}
