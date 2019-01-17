import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiscService {

  constructor(private http: HttpClient) { 

  }

  getPaymentActivities() {
    return this.http.get(`${environment.apiUrl}/payments/activities?typeGroup=invoice&limit=50`);
  }


}
