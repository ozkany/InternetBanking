import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonStore } from '@core/store/common/common.store';
import { ApproveFacade, ApproveActions } from '@core/facades/approve.facade';

@Component({
  selector: 'app-confirm-sms',
  templateUrl: './confirm-sms.component.html',
  styleUrls: ['./confirm-sms.component.css']
})
export class ConfirmSmsComponent implements OnInit {

  formSms: FormGroup;

  constructor(private approveFacade: ApproveFacade, private commonStore: CommonStore) { }

  ngOnInit() {
    this.formSms = new FormGroup({
      smscode: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onformSmsSubmit() {
    this.approveFacade.dispatch(new ApproveActions.DoConfirmSms({ smsCode: this.formSms.value.smscode }));
  }

}
