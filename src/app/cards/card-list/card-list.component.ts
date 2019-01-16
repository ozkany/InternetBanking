import { Component, OnInit } from '@angular/core';
import { CardStore } from 'src/app/_core/stores/card.store';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor(public cardStore: CardStore) { }

  ngOnInit() {
  }

}
