import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, BehaviorSubject, Observable } from 'rxjs';
import { map, flatMap,tap, filter } from 'rxjs/operators';
import { AccountsRootObject } from '../models/account.model';
import { GetAssetsRootResponse } from '../models/assets.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  fetchAccountListByHttp() {
    return this.http.get<AccountsRootObject>(`${environment.apiUrl}/accounts`);
  }
  
  fetchReceiptByHttp(accountId: string, receiptId: string) {
    return this.http.get(`${environment.apiUrl}/accounts/${accountId}/activities/${receiptId}/receipt`);
  }

  callAccountGetActivities(accountId: string) {
    return this.http.get(`${environment.apiUrl}/accounts/${accountId}/activities?limit=20`);
  }

  makeRecentTransfersCall() {
    return this.http.get(`${environment.apiUrl}/transfer/activities`);
  }

  makeGetAssetsCall() {
    return this.http.get<GetAssetsRootResponse>(`${environment.apiUrl}/assets?currencyCode=TRY`);
  }
}
