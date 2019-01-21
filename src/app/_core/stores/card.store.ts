import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CardListRootResponse } from '../models/cards/card.model';
import { CardService } from '../services/card.service';
import { tapLog } from '../extensions/tap-log';
import { CardIntermListRootObject } from '../models/cards/card-interm-list.model';

@Injectable({
 providedIn: 'root'
})
export class CardStore {

 public _selectedCardId$: BehaviorSubject<string> = new BehaviorSubject(null);

 private _cardListData$: BehaviorSubject<CardListRootResponse> = new BehaviorSubject(null);
 public readonly cardListData$: Observable<CardListRootResponse> = this._cardListData$.asObservable().pipe(tapLog("cardListData"));

 private _cardIntermListData$: BehaviorSubject<CardIntermListRootObject> = new BehaviorSubject(null);
 public readonly cardIntermListData$: Observable<CardIntermListRootObject> = this._cardIntermListData$.asObservable().pipe(tapLog("cardIntermListData"));

 constructor(private cardService: CardService) {
   this.fetchCards();
 }

 fetchCards(force: boolean = false) {
   if (force || this._cardListData$.getValue() == null) {
     this.cardService.getCards().subscribe(res => {
       this._cardListData$.next(res);
     });
   }
 }

 fetchCardIntermList(force: boolean = true) {
   if (force || this._cardIntermListData$.getValue() == null) {
     this.cardService.getIntermRecords(this._selectedCardId$.getValue()).subscribe(res => {
       this._cardIntermListData$.next(res);
     });
   }
 }

 setSelectedCardId(id: string) {
   this._selectedCardId$.next(id);
 }

}


