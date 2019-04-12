import { Component, OnInit } from '@angular/core';
import { CommonStore } from '@core/store/common/common.store';
import { ApproveFacade, ApproveActions  } from '@core/facades/approve.facade';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  constructor(private approveFacade: ApproveFacade, private commonStore: CommonStore) { }

  ngOnInit() {

  }

  onApprove() {
    this.approveFacade.dispatch(new ApproveActions.DoApprove());
  }
}
