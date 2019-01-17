import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomerAccount } from '../models/account.model';
import { Observable } from "rxjs";
import { AccountService } from '../services/account.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GetAssetsRootResponse } from '../models/assets.model';
import { map, tap } from 'rxjs/operators';
import { tapLog } from '../extensions/tap-log';

@Injectable({
  providedIn: 'root'
})
export class AccountStore {

  private _selectedAccountNumber$ = new BehaviorSubject<string>('');
  public readonly selectedAccountNumber$ = this._selectedAccountNumber$.pipe(tapLog("selectedAccountNumber"));

  private _customerAccountsData$: BehaviorSubject<CustomerAccount[]> = new BehaviorSubject([]);
  public readonly customerAccountsData$: Observable<CustomerAccount[]> = this._customerAccountsData$.pipe(tapLog("customerAccountsData"));

  private _receiptImageData$: BehaviorSubject<SafeResourceUrl> = new BehaviorSubject("");
  public readonly receiptImageData$: Observable<SafeResourceUrl> = this._receiptImageData$.asObservable().pipe(tapLog("receiptImageData"));

  private _assetsData$: BehaviorSubject<(string | number)[][]> = new BehaviorSubject(undefined);
  public readonly assetsData$: Observable<(string | number)[][]> = this._assetsData$.asObservable().pipe(tapLog("assetsData"));

  constructor(private accountService: AccountService, private sanitizer: DomSanitizer) {

    this.fetchAccounts();

  }

  fetchAccounts(force: boolean = false) {
    if (force || (this._customerAccountsData$.getValue() == null || this._customerAccountsData$.getValue().length == 0)) {
      this.accountService.getAccountList().subscribe(res => {
        this._customerAccountsData$.next(res.accounts);
      });
    }
  }

  fetchReceipt(receiptId: string) {
    this._receiptImageData$.next(undefined);

    this.accountService.getReceipt(this._selectedAccountNumber$.getValue(), receiptId).subscribe(res => {
      this._receiptImageData$.next(this.sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64, " + res['content']));
    });
  }

  fetchAssets() {
    this.accountService.getAssets().subscribe(res => {
      let data = res.assetTypes.map(a => [a.title, a.totalAmount]);
      data = [['Varlık Türü', 'Tutarı'], ...data];
      this._assetsData$.next(data);
    });
  }

  changeSelectedAccountNumber(id: string) {
    this._selectedAccountNumber$.next(id);
  }

}
