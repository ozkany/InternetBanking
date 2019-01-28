import { Component, OnInit } from '@angular/core';
import { ApproveService } from 'src/app/_core/services/approve.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoaderStore } from 'src/app/_core/stores/loader.store';


@Component({
  selector: 'app-confirm-sms',
  templateUrl: './confirm-sms.component.html',
  styleUrls: ['./confirm-sms.component.css']
})
export class ConfirmSmsComponent implements OnInit {

  formSms: FormGroup;

  constructor(public approveService: ApproveService, public loaderStore: LoaderStore) { }

  ngOnInit() {
    this.formSms = new FormGroup({
      smscode: new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }

  onformSmsSubmit() {
    this.approveService.confirmSms(this.formSms.value.smscode);
  }

}
