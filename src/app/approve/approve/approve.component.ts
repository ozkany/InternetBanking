import { Component, OnInit } from '@angular/core';
import { ApproveService } from 'src/app/_core/services/approve.service';
import { CommonStore } from 'src/app/_core/store/common/common.store';
import { ApproveFacade } from '../../_core/facades/approve.facade';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  transactionDetails;

  constructor(private commonStore: CommonStore,
    private approveFacade: ApproveFacade) { }

  ngOnInit() {

  }

  onApprove() {
    console.log("doApprove");
    this.approveFacade.dispatch(new this.approveFacade.approveActions.DoApprove());
  }
}
