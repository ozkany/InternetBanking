import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoaderStore } from 'src/app/_core/stores/loader.store';
import { AuthService } from '../_core/services/auth.service';
import { AlertService } from '../_core/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserForm: FormGroup;
  otpValidationForm: FormGroup;
  loginStep = 1;
  loginUserResponse: Object;
  createOtpResponse: Object;
  errorMessage: string;

  securityImageData = "";
  getsecurityImageHtmlData(): SafeHtml {
    if (this.securityImageData != "") {
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.securityImageData);
    }
  }

  constructor(
    private loaderStore: LoaderStore,
    private sanitizer: DomSanitizer,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.loginUserForm = new FormGroup({
      'username': new FormControl("cgr91", [Validators.required]),
      'password': new FormControl("123456", [Validators.required, Validators.minLength(3)])
    });
    this.otpValidationForm = new FormGroup({
      'smscode': new FormControl("123456", [Validators.required, Validators.minLength(6)])
    });

    this.authService.createToken().subscribe();
  }

  onLoginUserFormSubmit() {
    console.log(this.loginUserForm.value);
    this.errorMessage = "";

    this.authService.login(this.loginUserForm.value.username, this.loginUserForm.value.password).subscribe(
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

  onOtpValidationFormSubmit() {
    console.log(this.otpValidationForm.value);

    this.authService.validateOtp(this.otpValidationForm.value.smscode).subscribe(
      (data) => {
        console.log("onOtpValidationFormSubmit:", data);
        this.router.navigate(['/accounts/account-list']);
      },
      (error) => {
        console.log("SMS şifresi hatalı girildi: " + error);
      }
    );
  }

}
