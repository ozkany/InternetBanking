import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { ShortenStr } from './pipes/shorten-str.pipe';
import { TransformStr } from './pipes/transform-str.pipe';
import { BypassImgResSecurity } from './pipes/bypass-img-res-security.pipe';
import { ResourcePipe } from './pipes/resource.pipe';
import { AccountComboComponent } from './components/account-combo/account-combo.component';
import { AccountGridComponent } from './components/account-grid/account-grid.component';

@NgModule({
  declarations: [
    DateFormatPipe,
    ResourcePipe,
    ShortenStr,
    TransformStr,
    BypassImgResSecurity,
    AccountComboComponent,
    AccountGridComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DateFormatPipe,
    ResourcePipe,
    ShortenStr,
    TransformStr,
    BypassImgResSecurity,
    AccountComboComponent,
    AccountGridComponent
  ]
})
export class SharedModule { }
