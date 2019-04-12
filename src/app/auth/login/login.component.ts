import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonStore } from '@core/store/common/common.store';
import { AuthFacade, AuthActions } from '@core/facades/auth.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formSignin: FormGroup;
  formOtpValidation: FormGroup;

  constructor(private authFacade: AuthFacade, private commonStore: CommonStore) {}

  ngOnInit() {
    this.formSignin = new FormGroup({
      'username': new FormControl('mine12', [Validators.required]),
      'password': new FormControl('123456', [Validators.required, Validators.minLength(6)])
    });
    this.formOtpValidation = new FormGroup({
      'smscode': new FormControl('123456', [Validators.required, Validators.minLength(6)])
    });

    this.authFacade.dispatch(new AuthActions.CallCreateToken());
  }

  onformSigninSubmit() {
    this.authFacade.dispatch(new AuthActions.CallLogin({
      username: this.formSignin.value.username,
      password: this.formSignin.value.password
    }));
  }

  onCreateOTPButtonClicked() {
    this.authFacade.dispatch(new AuthActions.CallCreateOtp());
  }

  onformOtpValidationSubmit() {
    this.authFacade.dispatch(new AuthActions.CallValidateOtp(this.formOtpValidation.value.smscode));
  }

}
