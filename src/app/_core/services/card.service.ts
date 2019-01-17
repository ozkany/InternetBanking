import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetCardListRootResponse } from '../models/card.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { 

  }

  getCards() {
    return this.http.get<GetCardListRootResponse>(`${environment.apiUrl}/cards`);
  }



}
