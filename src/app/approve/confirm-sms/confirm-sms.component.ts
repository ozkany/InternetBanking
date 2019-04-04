import { Component, OnInit } from '@angular/core';
import { ApproveService } from 'src/app/_core/services/approve.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonStore } from 'src/app/_core/store/common/common.store';
import { ApproveFacade } from 'src/app/_core/facades/approve.facade';


@Component({
  selector: 'app-confirm-sms',
  templateUrl: './confirm-sms.component.html',
  styleUrls: ['./confirm-sms.component.css']
})
export class ConfirmSmsComponent implements OnInit {

  formSms: FormGroup;

  constructor(private approveFacade: ApproveFacade, public commonStore: CommonStore) { }

  ngOnInit() {
    console.log('ConfirmSmsComponent oninit')
    this.formSms = new FormGroup({
      smscode: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onformSmsSubmit() {
    //this.approveService.confirmSms(this.formSms.value.smscode);

    this.approveFacade.dispatch(new this.approveFacade.approveActions.DoConfirmSms({ smsCode: this.formSms.value.smscode }));
  }

}
