import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardFacade, CardActions } from '@core/facades/card.facade';
import { CreditCard } from '@core/models';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent implements OnInit, OnDestroy {

  @Input() cardListToView: CreditCard[];
  @Input() showIntermRecordsButton = false;

  subscription = new Subscription();

  constructor(public cardFacade: CardFacade) { }

  ngOnInit() {
    if (this.cardListToView == null) {
      this.subscription.add(this.cardFacade.cardList$.subscribe(res => {
        if (res && res.creditCardListResponse) {
          this.cardListToView = res.creditCardListResponse.creditCardList;
        }

        if (res && res.extendCardListResponse) {
          this.cardListToView = [...this.cardListToView, ...res.extendCardListResponse.extendCreditCardList];
        }
      }));
    }
  }

  onIntermRecordsButtonClick(cardGuid: string) {
    this.cardFacade.dispatch(new CardActions.NavtoIntermRecords({ cardId: cardGuid }));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
