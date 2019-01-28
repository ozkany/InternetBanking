import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { tapLog } from '../extensions/tap-log';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApproveService {

  private _tranApproveData$: BehaviorSubject<any> = new BehaviorSubject(null);
  public readonly tranApproveData$: Observable<any> = this._tranApproveData$.asObservable().pipe(tapLog("tranApproveData"));

  private _confirmSmsData$: BehaviorSubject<any> = new BehaviorSubject(null);
  public readonly confirmSmsData$: Observable<any> = this._confirmSmsData$.asObservable().pipe(tapLog("confirmSmsData"));

  private _finishData$: BehaviorSubject<any> = new BehaviorSubject(null);
  public readonly finishData$: Observable<any> = this._finishData$.asObservable().pipe(tapLog("finishData"));

  apiPath;
  forceDuplicate;

  constructor(private http: HttpClient, private router: Router) { }

  goToApproval(tranData: any, approveApiPath: string, forceDuplicate: boolean = false) {
    console.log("goToApproval", tranData);

    this._tranApproveData$.next(tranData);
    this.apiPath = approveApiPath;
    this.forceDuplicate = forceDuplicate;

    this.router.navigate(['/approve']);
  }

  doApprove() {
    console.log("doApprove", this._tranApproveData$);

    const request = {
      "forceDuplicate": this.forceDuplicate
    };
    
    const tranData = this._tranApproveData$.getValue();

    this.http.post(`${environment.apiUrl}${this.apiPath}`, request, {
      headers: {
        "X-Transaction-Token": tranData.token,
        "If-Match": tranData.token
      }
    }).subscribe(res => {
      console.log("approveService.approveTransaction", res);
      if (res["type"] == 'ConfirmSms') {
        this._confirmSmsData$.next(res);
        this.router.navigate(['/confirm-sms']);
      } else {
        console.error("approveTransaction response data type is not ConfirmSms !");
      }
    });;
  }

  confirmSms(otp: string) {
    console.log("confirmSms", this._confirmSmsData$);

    const request = {
      "forceDuplicate": this.forceDuplicate,
      "Otp": otp
    };

    const tranData = this._confirmSmsData$.getValue();
    
    return this.http.post(`${environment.apiUrl}${this.apiPath}`, request, {
      headers: {
        "X-Transaction-Token": tranData.token,
        "If-Match": tranData.token
      }
    }).subscribe(res => {
      console.log("approveService.confirmSms", res);
      this._finishData$.next(res);
      if (res["type"] == "Completed") {
        this.router.navigate(['/finish']);
      } else {
        console.error("confirmSms response data type is not complete !");
      }

    });;
  }

}
