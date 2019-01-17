import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { GetCardListRootResponse } from '../models/card.model';
import { CardService } from '../services/card.service';
import { tapLog } from '../extensions/tap-log';

@Injectable({
  providedIn: 'root'
})
export class CardStore {

  public _cardListData$: BehaviorSubject<GetCardListRootResponse> = new BehaviorSubject(null);
  public readonly cardListData$: Observable<GetCardListRootResponse> = this._cardListData$.asObservable().pipe(tapLog("cardListData"));

  constructor(private cardService: CardService) {
    this.fetchCards();
  }

  fetchCards(force: boolean = false) {
    if (force || this._cardListData$.getValue() == null) {
      this.cardService.getCards().subscribe(res => {
        this._cardListData$.next(res);
      }
      );
    }
  }
}
