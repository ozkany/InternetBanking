import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { IntermRecordsComponent } from './interm-records/interm-records.component';

const routes: Routes = [
 { path: 'card-list', component: CardListComponent, data: { title: 'Kart Listesi' } },
 { path: 'interm-records', component: IntermRecordsComponent, data: { title: 'Dönem İçi İşlemler' } }
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class CardsRoutingModule { }



