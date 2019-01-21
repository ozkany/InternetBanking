import { Component, OnInit } from '@angular/core';
import { CardStore } from 'src/app/_core/stores/card.store';
import { Router } from '@angular/router';

@Component({
 selector: 'app-card-list',
 templateUrl: './card-list.component.html',
 styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

 constructor(public cardStore: CardStore, private router: Router) { }

 ngOnInit() {
 }

 onIntermRecordsButtonClick(id: string) {
   this.cardStore.setSelectedCardId(id);
   this.router.navigate(['/cards/interm-records']);
 }

}



