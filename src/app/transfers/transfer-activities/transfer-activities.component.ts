import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../_core/store/app.state';
import * as fromTransfers from 'src/app/_core/store/transfer/transfer.reducers';
import * as TransferActions from 'src/app/_core/store/transfer/transfer.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transfer-activities',
  templateUrl: './transfer-activities.component.html',
  styleUrls: ['./transfer-activities.component.css']
})
export class TransferActivitiesComponent implements OnInit, OnDestroy {

  transferState$: Observable<fromTransfers.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.transferState$ = this.store.select('transfers');

    this.store.dispatch(new TransferActions.CallGetTransferActivities());
  }

  ngOnDestroy(): void {
    
  }

}
