import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransferFacade, TransferActions } from '@core/facades/transfer.facade';

@Component({
  selector: 'app-transfer-activities',
  templateUrl: './transfer-activities.component.html',
  styleUrls: ['./transfer-activities.component.css']
})
export class TransferActivitiesComponent implements OnInit {

  constructor(public transferFacade: TransferFacade) { }

  ngOnInit() {
    this.transferFacade.dispatch(new TransferActions.CallGetTransferActivities());
  }

}
