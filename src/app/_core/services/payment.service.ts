import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaymentActivityRootObject } from '../models/payment-activity.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { 

  }

  getPaymentActivities() {
    console.log('PaymentService getPaymentActivities acalling');
    return this.http.get<PaymentActivityRootObject>(`${environment.apiUrl}/payments/activities?typeGroup=invoice&limit=50`);
  }


}
