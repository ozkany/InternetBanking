import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CardStore } from 'src/app/_core/stores/card.store';

@Component({
 selector: 'app-interm-records',
 templateUrl: './interm-records.component.html',
 styleUrls: ['./interm-records.component.css']
})
export class IntermRecordsComponent implements OnInit {
 @Input() cardId: string;
  constructor(private cardStore: CardStore) { }

 ngOnInit() {
   this.cardStore.fetchCardIntermList();
 }

}
