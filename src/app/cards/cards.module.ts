import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardListComponent } from './card-list/card-list.component';
import { IntermRecordsComponent } from './interm-records/interm-records.component';

@NgModule({
 declarations: [
   CardListComponent,
   IntermRecordsComponent
 ],
 imports: [
   CommonModule,
   CardsRoutingModule
 ]
})
export class CardsModule { }



