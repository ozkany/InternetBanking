import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { GetCardListRootResponse } from '../models/card.model';
import { CardService } from '../services/card.service';

@Injectable({
  providedIn: 'root'
})
export class CardStore {

  public _cardListData: BehaviorSubject<GetCardListRootResponse> = new BehaviorSubject(null);

  public readonly cardListData: Observable<GetCardListRootResponse> = this._cardListData.asObservable();

  constructor(private cardService: CardService) {
    this.fetchCards();
  }

  fetchCards(force: boolean = false) {
    console.log("CardStore.fetchCards ...");

    if (force || this._cardListData.getValue() == null) {
      this.cardService.fetchCardListByHttp().subscribe(res => {
        console.log("fetchCards response before nexting", res);
        this._cardListData.next(res);
      }
      );
    }
  }
}
