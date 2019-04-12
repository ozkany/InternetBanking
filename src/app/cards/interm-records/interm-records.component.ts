import { Component, OnInit, Input } from '@angular/core';
import { CardFacade } from '@core/facades/card.facade';

@Component({
  selector: 'app-interm-records',
  templateUrl: './interm-records.component.html',
  styleUrls: ['./interm-records.component.css']
})
export class IntermRecordsComponent implements OnInit {

  @Input() cardId: string;

  constructor(private cardFacade: CardFacade) { }

  ngOnInit() {
  }

}
