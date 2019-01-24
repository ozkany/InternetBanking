import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../_core/services/auth.service';
import { LoaderStore } from 'src/app/_core/stores/loader.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formSignin: FormGroup;
  formOtpValidation: FormGroup;
  loginStep = 1;
  loginUserResponse: Object;
  createOtpResponse: Object;
  securityImageData = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private loaderStore: LoaderStore
  ) {}

  ngOnInit() {
    this.formSignin = new FormGroup({
      'username': new FormControl("cgr91", [Validators.required]),
      'password': new FormControl("123456", [Validators.required, Validators.minLength(6)])
    });
    this.formOtpValidation = new FormGroup({
      'smscode': new FormControl("123456", [Validators.required, Validators.minLength(6)])
    });

    this.authService.createToken().subscribe();
  }

  onformSigninSubmit() {
    this.authService.login(this.formSignin.value.username, this.formSignin.value.password).subscribe(
      user => {
        console.log("Login User Response", user);
        this.loginUserResponse = user;
        this.securityImageData = "data:image/png;base64, " + user.profileImageUrl;
        this.loginStep = 2;
      }
    );
  }

  onCreateOTPButtonClicked() {
    this.authService.createOtp().subscribe((data) => {
      console.log(data);
      this.createOtpResponse = data;
      this.loginStep = 3;
    }
    );
  }

  onformOtpValidationSubmit() {
    this.authService.validateOtp(this.formOtpValidation.value.smscode).subscribe(
      (data) => {
        console.log("onformOtpValidationSubmit:", data);
        this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || '/accounts/account-list']);
      },
      (error) => {
        console.log("SMS şifresi hatalı girildi: " + error);
      }
    );
  }

}
