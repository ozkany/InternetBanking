import { Component, OnInit } from '@angular/core';
import { CardFacade, CardActions } from '@core/facades/card.facade';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor(public cardFacade: CardFacade) { }

  ngOnInit() {
    this.cardFacade.dispatch(new CardActions.CallGetCards());
  }

  onIntermRecordsButtonClick(id: string) {
    this.cardFacade.dispatch(new CardActions.NavtoIntermRecords({ cardId: id }));
  }

}
