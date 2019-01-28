import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ApproveService } from './approve.service';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(
    private http: HttpClient,
    private approveService: ApproveService
    ) {}  

  makeMoneyOrder(sourceAccountId: string, destinationAccountId: string, amount: number, explanation: string, transactionDate: string, ) {
    const request = {
        "SourceAccountId": sourceAccountId,
        "DestinationAccountId": destinationAccountId,
        "Amount": amount,
        "Explanation": explanation,
        "TransactionDate": transactionDate
    };
    
    this.http.post(`${environment.apiUrl}/transfer/moneyorder`, request).subscribe(res => {
        console.log("makeMoneyOrder", res);
        if(res["type"] == 'Confirm') {
            this.approveService.goToApproval(res, "/transfer/transferapprovev2");
        } else  {
            console.error("response [type] is not Confirm!");
        }
    });
  }

}
