import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tapLog } from '../extensions/tap-log';
import { PaymentService } from '../services/payment.service';
import { LastPaymentsDetail } from '../models/payment-activity.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentStore {

  public _paymentActivities$: BehaviorSubject<LastPaymentsDetail[]> = new BehaviorSubject(null);
  public readonly paymentActivities$: Observable<LastPaymentsDetail[]> = this._paymentActivities$.asObservable().pipe(tapLog("paymentActivities"));

  constructor(private paymentService: PaymentService) {
    
  }

  fetchPaymentActivities(force: boolean = false) {
    this.paymentService.getPaymentActivities().subscribe(res => {
        this._paymentActivities$.next(res.lastPaymentsDetails);
    });
  }
}
