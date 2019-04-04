import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AccountsRootObject } from '../models/accounts/account.model';
import { GetAssetsRootResponse } from '../models/accounts/assets.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountList() {
    return this.http.get<AccountsRootObject>(`${environment.apiUrl}/accounts`)
  }

  getReceipt(accountId: string, receiptId: string) {
    return this.http.get(`${environment.apiUrl}/accounts/${accountId}/activities/${receiptId}/receipt`);
  }

  getAccountActivities(accountId: string) {
    return this.http.get(`${environment.apiUrl}/accounts/${accountId}/activities?limit=20`)
      .pipe(
        map(res => {
          return {
            accountId: accountId,
            activities: res['activities']
          };
        })
      );
  }

  getRecentTransfers() {
    return this.http.get(`${environment.apiUrl}/transfer/activities`);
  }

  getAssets() {
    return this.http.get<GetAssetsRootResponse>(`${environment.apiUrl}/assets?currencyCode=TRY`);
  }
}
