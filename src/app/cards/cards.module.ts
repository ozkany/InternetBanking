import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { CardsRoutingModule } from './cards-routing.module';
import { CardListComponent } from './card-list/card-list.component';
import { IntermRecordsComponent } from './interm-records/interm-records.component';
import { reducer } from 'src/app/_core/store/card/card.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CardEffects } from '../_core/store/card/card.effects';

@NgModule({
 declarations: [
   CardListComponent,
   IntermRecordsComponent
 ],
 imports: [
   CommonModule,
   CardsRoutingModule,
   StoreModule.forFeature('cards', reducer),
   EffectsModule.forFeature([CardEffects])
 ]
})
export class CardsModule { }



