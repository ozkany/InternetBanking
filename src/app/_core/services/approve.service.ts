import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApproveTranData } from 'src/app/_core/models/approve/approve-tran-data.model';

@Injectable({
  providedIn: 'root'
})
export class ApproveService {

  constructor(private http: HttpClient) { }

  doApprove(approveData: ApproveTranData) {
    const request = {
      'forceDuplicate': approveData.forceDuplicate
    };

    console.log(`doApprove service: ${environment.apiUrl}${approveData.approveApiPath}`);

    return this.http.post(`${environment.apiUrl}${approveData.approveApiPath}`, request, {
      headers: {
        'X-Transaction-Token': approveData.tranData.token,
        'If-Match': approveData.tranData.token
      }
    });
  }

  doConfirmSms(smsCode: string, token: string, confirmSmsURLPath: string, forceDuplicate: boolean) {
    const request = {
      'forceDuplicate': forceDuplicate,
      'Otp': smsCode
    };

    return this.http.post<ApproveCompletedResponse>(`${environment.apiUrl}${confirmSmsURLPath}`, request, {
      headers: {
        'X-Transaction-Token': token,
        'If-Match': token
      }
    });
  }
}
