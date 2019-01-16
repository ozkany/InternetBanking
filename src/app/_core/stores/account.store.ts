import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomerAccount } from '../models/account.model';
import { Observable } from "rxjs";
import { AccountService } from '../services/account.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GetAssetsRootResponse } from '../models/assets.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountStore {

  selectedAccountNumber = new BehaviorSubject<string>('');

  private _customerAccountsData: BehaviorSubject<CustomerAccount[]> = new BehaviorSubject([]);
  public readonly customerAccountsData: Observable<CustomerAccount[]> = this._customerAccountsData.asObservable();
  
  private _receiptImageData: BehaviorSubject<SafeResourceUrl> = new BehaviorSubject("");
  public readonly receiptImageData: Observable<SafeResourceUrl> = this._receiptImageData.asObservable();
  
  private _assetsData: BehaviorSubject<(string|number)[][]> = new BehaviorSubject(undefined);
  public readonly assetsData: Observable<(string|number)[][]> = this._assetsData.asObservable();

  public readonly selectedReceiptId = new Observable<string>();
  public selecetedReceiptIdStr: string;

  constructor(private accountService: AccountService, private sanitizer: DomSanitizer) {

    this.fetchAccounts();

  }

  fetchAccounts(force: boolean = false) {
    console.log("AccountStore.fetchAccounts ...");

    if (force || (this._customerAccountsData.getValue() == null || this._customerAccountsData.getValue().length == 0)) {
      this.accountService.fetchAccountListByHttp().subscribe(res => {
        console.log("fetchAccounts response before nexting", res.accounts);
        this._customerAccountsData.next(res.accounts);
      });
    }
  }

  fetchReceipt(receiptId: string) {
    console.log("AccountStore.fetchReceipt ...");
    this._receiptImageData.next(undefined);

    this.accountService.fetchReceiptByHttp(this.selectedAccountNumber.getValue(), receiptId).subscribe(res => {
      console.log("fetchReceipt response before nexting", res);
      this._receiptImageData.next(this.sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64, " + res['content']));
    });
  }

  fetchAssets() {
    console.log("AccountStore.fetchAssets ...");

    this.accountService.makeGetAssetsCall().subscribe(res => {
      console.log("fetchAssets response before nexting", res);
      let data = res.assetTypes.map(a => [a.title, a.totalAmount]);
      data = [['Varlık Türü', 'Tutarı'], ...data];
      this._assetsData.next(data);
    });
  }

}
