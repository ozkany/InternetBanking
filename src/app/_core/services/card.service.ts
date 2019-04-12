import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CardListRootResponse, CardIntermListRootObject } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getCards() {
    return this.http.get<CardListRootResponse>(`${environment.apiUrl}/cards`);
  }

  getIntermRecords(cardId: string) {
    return this.http.get<CardIntermListRootObject>(`${environment.apiUrl}/cards/GetIntermRecords/${cardId}`);
  }
}
