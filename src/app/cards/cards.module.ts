import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { CardsRoutingModule } from './cards-routing.module';
import { CardListComponent } from './card-list/card-list.component';
import { IntermRecordsComponent } from './interm-records/interm-records.component';
import { reducer } from 'src/app/_core/store/card/card.reducers';

@NgModule({
 declarations: [
   CardListComponent,
   IntermRecordsComponent
 ],
 imports: [
   CommonModule,
   CardsRoutingModule,
   StoreModule.forFeature('cards', reducer)
 ]
})
export class CardsModule { }



