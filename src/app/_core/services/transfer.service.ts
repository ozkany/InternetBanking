import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MoneyOrderRequest, MoneyOrderResponse, TransferActivities } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http: HttpClient) { }

  makeMoneyOrder(moneyOrderRequest: MoneyOrderRequest) {
    const request = {
      'SourceAccountId': moneyOrderRequest.sourceAccountId,
      'DestinationAccountId': moneyOrderRequest.destinationAccountId,
      'Amount': moneyOrderRequest.amount,
      'Explanation': moneyOrderRequest.explanation,
      'TransactionDate': moneyOrderRequest.transactionDate
    };

    return this.http.post<MoneyOrderResponse>(`${environment.apiUrl}/transfer/moneyorder`, request);
  }

  getRecentTransfers() {
    return this.http.get<TransferActivities>(`${environment.apiUrl}/transfer/activities`);
  }
}
