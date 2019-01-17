import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tapLog } from '../extensions/tap-log';
import { PaymentService } from '../services/payment.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentStore {

  public _paymentActivities$: BehaviorSubject<Object> = new BehaviorSubject(null);
  public readonly paymentActivities$: Observable<Object> = this._paymentActivities$.asObservable().pipe(tapLog("paymentActivities"));

  constructor(private paymentService: PaymentService) {
    
  }

  fetchPaymentActivities(force: boolean = false) {
    this.paymentService.getPaymentActivities().subscribe(res => {
        this._paymentActivities$.next(res);
    });
  }
}
