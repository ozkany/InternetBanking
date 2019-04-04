import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { CommonStore } from 'src/app/_core/store/common/common.store';
import * as fromApp from 'src/app/_core/store/app.state';
import * as fromAuth from 'src/app/_core/store/auth/auth.reducers';
import * as AuthActions from 'src/app/_core/store/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authState$: Observable<fromAuth.State>;
  formSignin: FormGroup;
  formOtpValidation: FormGroup;

  constructor(private commonStore: CommonStore, private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.formSignin = new FormGroup({
      'username': new FormControl("mine12", [Validators.required]),
      'password': new FormControl("123456", [Validators.required, Validators.minLength(6)])
    });
    this.formOtpValidation = new FormGroup({
      'smscode': new FormControl("123456", [Validators.required, Validators.minLength(6)])
    });

    this.authState$ = this.store.select('auth');
    this.store.dispatch(new AuthActions.CallCreateToken());
  }

  onformSigninSubmit() {
    this.store.dispatch(new AuthActions.CallLogin({username: this.formSignin.value.username, password: this.formSignin.value.password}));
  }

  onCreateOTPButtonClicked() {
    this.store.dispatch(new AuthActions.CallCreateOtp());
  }

  onformOtpValidationSubmit() {
    this.store.dispatch(new AuthActions.CallValidateOtp(this.formOtpValidation.value.smscode));
  }

}
