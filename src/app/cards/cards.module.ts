import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CardsRoutingModule } from './cards-routing.module';
import { reducer } from '@core/store/card/card.reducers';
import { CardEffects } from '@core/store/card/card.effects';
import { CardListComponent } from './card-list/card-list.component';
import { IntermRecordsComponent } from './interm-records/interm-records.component';

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



