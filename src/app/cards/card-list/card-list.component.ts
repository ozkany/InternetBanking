import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../../_core/store/app.state';
import * as fromCards from '../../_core/store/card/card.reducers';
import * as CardActions from 'src/app/_core/store/card/card.actions';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cardState$: Observable<fromCards.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.cardState$ = this.store.select('cards');
    this.store.dispatch(new CardActions.CallGetCard());
  }

  onIntermRecordsButtonClick(id: string) {
    this.store.dispatch(new CardActions.NavtoIntermRecords({ cardId: id }));
  }

}



