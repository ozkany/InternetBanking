import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../_core/store/app.state';
import * as fromCards from '../../_core/store/card/card.reducers';

@Component({
  selector: 'app-interm-records',
  templateUrl: './interm-records.component.html',
  styleUrls: ['./interm-records.component.css']
})
export class IntermRecordsComponent implements OnInit {

  @Input() cardId: string;

  cardState$: Observable<fromCards.State>;

  constructor(public store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.cardState$ = this.store.select('cards');
  }

}
